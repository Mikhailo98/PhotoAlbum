using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security.OAuth;
using PhotoAlbum.BLL.DTOs;
using PhotoAlbum.BLL.PagingModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace PhotoAlbum.BLL.Interface
{
    public interface IUserService
    {
        
        Task<bool> UserExists(string userName);
        UserProfilePage GetByUserPage(string userId, PagingParameterDTO page);
        UserProfilePage GetByUserNamePage(string userName, PagingParameterDTO page);

        UserDTO GetUsersInfo(string userID);
        IEnumerable<UserDTO> GetUsersBySurname(string surname);

        void UpdateUserInfo(string userId, UpdateUserInfoBLL newUserInfo);
        void UpdateUserAvatar(byte[] buffer, string fileName, string user);
        void DeleteUser(string userId);


        Task<IdentityResult> Register(UserRegisterDTO user);
        Task<ClaimsIdentity> CookiesIdentity(OAuthGrantResourceOwnerCredentialsContext context);
        Task<ClaimsIdentity> OAuthIdentity(OAuthGrantResourceOwnerCredentialsContext context);

    }
}
