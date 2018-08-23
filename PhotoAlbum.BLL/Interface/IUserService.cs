using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security.OAuth;
using PhotoAlbum.BLL.DTOs;
using PhotoAlbum.BLL.PagingModels;
using System.Security.Claims;
using System.Threading.Tasks;

namespace PhotoAlbum.BLL.Interface
{
    public interface IUserService
    {
        
        Task<bool> IfUserNameExists(string userName);
        UserProfilePage GetProfileByUserId(string userId, PagingParameter page);
        UserProfilePage GetProfileByUsername(string userName, PagingParameter page);

        UserDTO GetUsersInfo(string userID);

        void UpdateUserInfo(string userId, UpdateUserInfoDTO newUserInfo);
        void UpdateUserAvatar(byte[] buffer, string fileName, string user);
        void DeleteUser(string userId);


        Task<IdentityResult> Register(UserRegisterDTO user);
        Task<ClaimsIdentity> CookiesIdentity(OAuthGrantResourceOwnerCredentialsContext context);
        Task<ClaimsIdentity> OAuthIdentity(OAuthGrantResourceOwnerCredentialsContext context);

    }
}
