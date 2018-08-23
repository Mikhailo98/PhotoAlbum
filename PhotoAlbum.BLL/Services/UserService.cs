using Microsoft.AspNet.Identity;
using PhotoAlbum.BLL.Interface;
using PhotoAlbumCore.Entities;
using PhotoAlbumCore.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OAuth;
using PhotoAlbum.BLL.DTOs;
using System.IO;
using System.Web;
using AutoMapper;
using System.Security.Claims;
using Microsoft.AspNet.Identity.Owin;
using PhotoAlbumCore.Identity;
using PhotoAlbum.BLL.PagingModels;
using PhotoAlbum.BLL.Infrastucture;
using Microsoft.AspNet.Identity.EntityFramework;

namespace PhotoAlbum.BLL.Services
{
    public class UserService : IUserService
    {

        #region .ctor

        IUnitOfWork Database { get; set; }

        public UserService(IUnitOfWork unit)
        {
            Database = unit;
        }


        #endregion


        public async Task<bool> IfUserNameExists(string userName)
        {
            var result = await Database.UserManager.FindByNameAsync(userName);
            if (result == null)
            {
                return false;
            }
            return true;
        }




        public void UpdateUserAvatar(byte[] buffer, string fileName, string userId)
        {

            string fileExtension = Path.GetExtension(fileName);
            fileName = Guid.NewGuid() + fileExtension;


            //should be information of registered user
            UserProfile user = Database.UserRepository.Find(userId);
            if (user == null)
            {
                throw new NullReferenceException("Invalid User id");
            }

            var localpath = Path.Combine(PhysicalDirectory.ImagesStoreFolder, user.Id, fileName);

            //path to image location on server
            var path = Path.Combine(PhysicalDirectory.CurrentServerLocation, localpath);


            try
            {
                PhysicalDirectory.WriteImageOnServerPhysically(buffer, path);

                //deletes old image if exists
                if (!string.IsNullOrEmpty(user.AvatarUrl))
                {
                    var oldpath = Path.Combine(PhysicalDirectory.CurrentServerLocation, user.Id, user.AvatarUrl);
                    PhysicalDirectory.DeleleImageFromServerPhysically(oldpath);
                }

                user.AvatarUrl = localpath;
                Database.UserRepository.Update(user);
                Database.Commit();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public UserDTO GetUsersInfo(string username)
        {

            UserProfile user = ((IUserRepository)Database.UserRepository).GetUserByUserName(username);
            if (user == null)
            {
                throw new ArgumentNullException("UserName is not valid");
            }
            var mappedUser = Mapper.Map<UserDTO>(user);

            return mappedUser;

        }



        public void UpdateUserInfo(string userId, UpdateUserInfoDTO newUserInfo)
        {
            UserProfile userToDelete = Database.UserRepository.Find(userId);
            if (userToDelete == null)
            {
                throw new ArgumentNullException("userid is not valid");
            }

            userToDelete.Description = newUserInfo.Description;
            userToDelete.Fullname = newUserInfo.FullName;
            userToDelete.UserName = newUserInfo.Username;
            userToDelete.ApplicationUser.UserName = newUserInfo.Username;


            Database.UserRepository.Update(userToDelete);
            Database.Commit();
        }



        public void DeleteUser(string userId)
        {

            UserProfile userToDelete = Database.UserRepository.Find(userId);
            if (userToDelete == null)
            {
                throw new ArgumentNullException("userid is not valid");
            }

            Database.UserRepository.Delete(userToDelete);
            Database.Commit();

        }



        /// <summary>
        /// Returns A Profile with Images and Paged
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        public UserProfilePage GetProfileByUserId(string userid, PagingParameter page)
        {
            if (string.IsNullOrEmpty(userid))
            {
                throw new ArgumentException("User Id can't be null or empty");
            }


            var result = ((IUserRepository)Database.UserRepository)
                .GetPagedUserProfile(userid, page.PageIndex, page.ItemsPerPage);

            var userProfile = new UserProfilePage()
            {
                User = Mapper.Map<UserDTO>(result),
                Images = Mapper.Map<List<ImagePost>>(result.Images),
                Parameters = new PagingParameter()
                {
                    ItemsPerPage = page.ItemsPerPage,
                    PageIndex = page.PageIndex,
                    TotalItems = ((IImageRepository)Database.ImageRepository).ImagesQuantity(result.Id),
                }
            };


            return userProfile;
        }

        /// <summary>
        /// Returns A Profile with Images and Paged
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        public UserProfilePage GetProfileByUsername(string userName, PagingParameter page)
        {
            if (string.IsNullOrEmpty(userName))
            {
                throw new ArgumentException("User Name can't be null or empty");
            }

            var result = ((IUserRepository)Database.UserRepository)
                .GetPagedUserByUsername(userName, page.PageIndex, page.ItemsPerPage);

            var userProfile = new UserProfilePage()
            {
                User = Mapper.Map<UserDTO>(result),
                Images = Mapper.Map<List<ImagePost>>(result.Images),
                Parameters = new PagingParameter()
                {
                    ItemsPerPage = page.ItemsPerPage,
                    PageIndex = page.PageIndex,
                    TotalItems = ((IImageRepository)Database.ImageRepository).ImagesQuantity(result.Id),
                }

            };
            return userProfile;
        }



        #region Accounts



        public async Task<IdentityResult> Register(UserRegisterDTO model)
        {


            ApplicationUser user = await Database.UserManager
                .FindByEmailAsync(model.Email);

            if (user != null)
            {
                return IdentityResult.Failed("User with such login was already registered");
            }

            user = new ApplicationUser
            {
                UserName = model.UserName,
                Email = model.Email,
                PhoneNumber = model.PhoneNumber,
            };

            //To AspNetUsers table
            IdentityResult result = await Database.UserManager
                .CreateAsync(user, model.Password);

            if (result.Errors.Count() > 0)
                return result;

            // adding a role
            await Database.UserManager.AddToRoleAsync(user.Id, "user");

            // Making a profile
            UserProfile userProfile = new UserProfile
            {
                Id = user.Id,
                UserName = model.UserName,
                Fullname = model.Fullname,
                ApplicationUser = user,
                AvatarUrl = Path.Combine(PhysicalDirectory.CurrentServerLocation, PhysicalDirectory.ImagesStoreFolder, "61e852831fb1bbd9027b243414f37786.png")
            };

            Database.UserRepository.Add(userProfile);
            CreateUserDirectory(userProfile.Id);
            Database.Commit();

            return IdentityResult.Success;

        }

        /// <summary>
        /// Creates unique folder for user, with its id
        /// </summary>
        /// <param name="surname"></param>
        protected void CreateUserDirectory(string surname)
        {

            string physicalServerPath =
                HttpContext.Current.Server.MapPath("~/photosx/");

            string physicalUserFolderPath =
                Path.Combine(physicalServerPath, surname);
            try
            {
                Directory.CreateDirectory(physicalUserFolderPath);
            }
            catch (Exception ex)
            {
                throw ex.InnerException;
            }

        }




        public async Task<ClaimsIdentity> CookiesIdentity(OAuthGrantResourceOwnerCredentialsContext context)
        {

            ApplicationUser user = await Database.UserManager.FindAsync(context.UserName, context.Password);

            if (user == null)
            {
                context.SetError("invalid_grant", "The user name or password is incorrect.");
                throw new Exception("invalid_grantt : The user name or password is incorrect.");

            }

            return await user.GenerateUserIdentityAsync(Database.UserManager,
               CookieAuthenticationDefaults.AuthenticationType);

        }

        public async Task<ClaimsIdentity> OAuthIdentity(OAuthGrantResourceOwnerCredentialsContext context)
        {


            //var userManager = context.OwinContext.GetUserManager<ApplicationUserManager>();
            ApplicationUser user = await Database.UserManager.FindAsync(context.UserName, context.Password);

            if (user == null)
            {
                context.SetError("invalid_grant", "The user name or password is incorrect.");
                return null;
            }
            return await user.GenerateUserIdentityAsync(Database.UserManager,
                          OAuthDefaults.AuthenticationType);

        }

        public void SignOut(params string[] type)
        {
            Database.UserManager.UserTokenProvider = null;
        }
        #endregion


    }
}
