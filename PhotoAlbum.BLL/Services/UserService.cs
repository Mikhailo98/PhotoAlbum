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


        public async Task<bool> UserExists(string userName)
        {
            var result = await Database.UserManager.FindByNameAsync(userName);
            if (result == null)
            {
                return false;
            }

            return true;
        }

        //public void Seed()
        //{


        //    var tag1 = new Tag() { Description = "#Auto" };
        //    var tag2 = new Tag() { Description = "#Sea" };
        //    var tag3 = new Tag() { Description = "#Mountain" };
        //    var tag4 = new Tag() { Description = "#Man" };
        //    var tag5 = new Tag() { Description = "#Guy" };
        //    var tag6 = new Tag() { Description = "#Car" };



        //    IdentityRole userRole = new IdentityRole("User");
        //    IdentityRole adminRole = new IdentityRole("Admin");


        //    var applicationUser1 = new ApplicationUser()
        //    {
        //        UserName = "User1",
        //        Email = "TestUser1@Domain.tld",

        //    };
        //    var applicationUser2 = new ApplicationUser()
        //    {
        //        UserName = "User2",
        //        Email = "TestUser2@Domain.tld"
        //    };
        //    var applicationUser3 = new ApplicationUser()
        //    {
        //        UserName = "User3",
        //        Email = "TestUser3@Domain.tld"

        //    };




        //    var user1 = new UserProfile()
        //    {
        //        UserName = applicationUser1.UserName,
        //        Id = applicationUser1.Id,
        //        Fullname = "FirstName1  Surname1",


        //    };

        //    var user2 = new UserProfile()
        //    {
        //        UserName = applicationUser2.UserName,
        //        Id = applicationUser2.Id,
        //        Fullname = "FirstName2 Surname2",

        //    };

        //    var user3 = new UserProfile()
        //    {
        //        UserName = applicationUser3.UserName,
        //        Id = applicationUser3.Id,
        //        Fullname = "FirstName3 Surname3",
        //    };






        //    string physicalServerPath =
        //        HttpContext.Current.Server.MapPath("~/photosx/");

        //    string User1Folder =
        //        Path.Combine(physicalServerPath, user1.Id.ToString());
        //    string User2Folder =
        //      Path.Combine(physicalServerPath, user2.Id.ToString());
        //    string User3Folder =
        //      Path.Combine(physicalServerPath, user3.Id.ToString());


        //    Directory.CreateDirectory(User1Folder);
        //    Directory.CreateDirectory(User2Folder);
        //    Directory.CreateDirectory(User3Folder);





        //    var image1 = new Image() { LocalPath = user1.Id + "\\clouds-conifers-desktop-wallpaper-707344.jpg", User = user1, Tags = { tag3 } };
        //    var image11 = new Image() { LocalPath = user1.Id + "\\adult-alone-bike-helmet-1245618.jpg", User = user1, Tags = { tag4, tag5 }, };
        //    var image111 = new Image() { LocalPath = user1.Id + "\\azores-daylight-guy-1247933.jpg", User = user1, Tags = { tag2, tag5 } };


        //    var image2 = new Image() { LocalPath = user2.Id + "\\animal-avian-bird-1247512.jpg", User = user2 };
        //    var image22 = new Image() { LocalPath = user2.Id + "\\ball-shaped-blurred-background-close-up-1098518.jpg", User = user2 };


        //    var image3 = new Image() { LocalPath = user3.Id + "\\applause-arena-audience-761543.jpg", User = user3 };
        //    var image33 = new Image() { LocalPath = user3.Id + "\\cold-environment-fog-776390.jpg", User = user3, Tags = { tag3 } };
        //    var image333 = new Image() { LocalPath = user3.Id + "\\asphalt-car-classic-253096.jpg", User = user3, Tags = { tag1, tag6 } };
        //    var image3333 = new Image() { LocalPath = user3.Id + "\\beach-horizon-island-1030903.jpg", User = user3, Tags = { tag2 } };
        //    var image33333 = new Image() { LocalPath = user3.Id + "\\automobile-automotive-autumn-1200458.jpg", User = user3, Tags = { tag1, tag6 } };




        //    Database.UserManager.Create(applicationUser1, "123456");
        //    Database.UserManager.Create(applicationUser2, "123456");
        //    Database.UserManager.Create(applicationUser3, "123456");

        //    Database.ImageRepository.Add(image1);
        //    Database.ImageRepository.Add(image11);
        //    Database.ImageRepository.Add(image111);

        //    Database.ImageRepository.Add(image2);
        //    Database.ImageRepository.Add(image22);

        //    Database.ImageRepository.Add(image3);
        //    Database.ImageRepository.Add(image33);
        //    Database.ImageRepository.Add(image333);
        //    Database.ImageRepository.Add(image3333);
        //    Database.ImageRepository.Add(image33333);

        //    Database.TagRepository.Add(tag1);
        //    Database.TagRepository.Add(tag2);
        //    Database.TagRepository.Add(tag3);
        //    Database.TagRepository.Add(tag4);


        //    Database.UserRepository.Add(user1);
        //    Database.UserRepository.Add(user2);
        //    Database.UserRepository.Add(user3);

        //    Database.Commit();

        //}




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


        public void UpdateUserAvatar(byte[] buffer, string fileName, string userId)
        {

            string fileExtension = Path.GetExtension(fileName);
            fileName = Guid.NewGuid() + fileExtension;


            //should be information of registered user
            UserProfile user = Database.UserRepository.GetById(userId);
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


        /// <summary>
        /// INvalid
        /// </summary>
        /// <param name="userName"></param>
        /// <returns></returns>
        public UserDTO GetByUserName(string userName)
        {
            //if (userName == null)
            //{
            //    return null;
            //}

            //var result = ((IUserRepository)Database.UserRepository)
            //    .GetByUserName(userName);
            //var r = Mapper.Map<UserDTO>(result);
            //return r;
            return null;
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

        public IEnumerable<UserDTO> GetUsersBySurname(string surname)
        {
            throw new NotImplementedException();
        }

        public void UpdateUserInfo(string userId, UpdateUserInfoBLL newUserInfo)
        {
            UserProfile userToDelete = Database.UserRepository.GetById(userId);
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

            UserProfile userToDelete = Database.UserRepository.GetById(userId);
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
        public UserProfilePage GetByUserPage(string userid, PagingParameterDTO page)
        {
            if (string.IsNullOrEmpty(userid))
            {
                throw new ArgumentException("User Id can't be null or empty");
            }


            var result = ((IUserRepository)Database.UserRepository)
                .GetPagedUserProfile(userid, page.PageIndex, page.ItemsPerPage);



            var userProf = new UserProfilePage()
            {
                User = Mapper.Map<UserDTO>(result),
                Images = Mapper.Map<List<ImagePost>>(result.Images)

            };
            return userProf;
        }

        /// <summary>
        /// Returns A Profile with Images and Paged
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        public UserProfilePage GetByUserNamePage(string userName, PagingParameterDTO page)
        {
            if (string.IsNullOrEmpty(userName))
            {
                throw new ArgumentException("User Name can't be null or empty");
            }

            var result = ((IUserRepository)Database.UserRepository)
                .GetByUserName(userName, page.PageIndex, page.ItemsPerPage);

            var userProf = new UserProfilePage()
            {
                User = Mapper.Map<UserDTO>(result),
                Images = Mapper.Map<List<ImagePost>>(result.Images)

            };
            return userProf;
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
                ApplicationUser = user
            };

            Database.UserRepository.Add(userProfile);
            CreateUserDirectory(userProfile.Id);
            Database.Commit();

            return IdentityResult.Success;

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
