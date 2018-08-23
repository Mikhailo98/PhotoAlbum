using AutoMapper;
using Microsoft.AspNet.Identity;
using PhotoAlbum.BLL.Interface;
using PhotoAlbum.BLL.PagingModels;
using PhotoAlbum.Web.Models;
using System;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using PhotoAlbum.Web.Infrastructure;


namespace PhotoAlbum.Web.Controllers
{

    [RoutePrefix("api/users")]
    public class UsersController : ApiController
    {
        private IUserService userService;

        public UsersController(IUserService userService)
        {
            this.userService = userService;
        }



        /// <summary>
        /// Returns user profile page
        /// </summary>
        /// <param name="userName"></param>
        /// <param name="parameterModel"></param>
        /// <returns></returns>
        // GET: api/User/mike
        [Route("{userId}/profile")]
        public IHttpActionResult GetUserPage(string userId, [FromUri]UriParameters uriParam)
        {

            var page = new PagingParameter()
            {
                ItemsPerPage = uriParam.ItemsPerPage,
                PageIndex = uriParam.PageIndex
            };

            try
            {
                var profile = userService.GetProfileByUserId(userId, page);
                var profileModel = Mapper.Map<UserProfilePageModel>(profile);

                string requestUser = HttpContext.Current.User.Identity.GetUserId();

                if (!string.IsNullOrEmpty(requestUser))
                {
                    profileModel.Images.IsLikedCheck(requestUser);

                    if (profileModel.User.Id == requestUser)
                    {
                        profileModel.IsOwnProfile = true;
                    }
                }

                return Ok(profileModel);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }





        /// <summary>
        /// Returns userProfile 
        /// </summary>
        /// <param name="userName"></param>
        /// <param name="parameterModel"></param>
        /// <returns></returns>
        // GET: api/User/mike
        [Route("name/{userName}/profile")]
        public IHttpActionResult GetUserByName(string userName, [FromUri]UriParameters uriParam)
        {

            var page = new PagingParameter()
            {
                ItemsPerPage = uriParam.ItemsPerPage,
                PageIndex = uriParam.PageIndex
            };

            try
            {
                var profile = userService.GetProfileByUsername(userName, page);
                var profileModel = Mapper.Map<UserProfilePageModel>(profile);

                string requestUser = HttpContext.Current.User.Identity.GetUserId();
                if (!string.IsNullOrEmpty(requestUser))
                {
                    profileModel.Images.IsLikedCheck(requestUser);

                    if (profileModel.User.Id == requestUser)
                    {
                        profileModel.IsOwnProfile = true;
                    }
                }

                return Ok(profileModel);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet]
        [Route("{userName}/check")]
        public async Task<IHttpActionResult> CheckUserWithUserName(string userName)
        {
            try
            {
                var check = await userService.IfUserNameExists(userName);
                return Ok(check);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }




        [HttpPatch]
        [Authorize]
        [Route("{id}/profile/info")]
        public HttpResponseMessage UpdateUserInfo(string id, [FromBody]UpdateUserModel model)
        {

            if (HttpContext.Current.User.Identity.GetUserId() != id)
            {
                return Request.CreateErrorResponse(HttpStatusCode.Forbidden, "Do not have permission");
            }

            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.Forbidden, ModelState);
            }

            var userInfo = new UpdateUserInfoDTO
            {
                Username = model.Username,
                Description = model.Description,
                FullName = model.Firstname + " " + model.Surname
            };

            try
            {
                userService.UpdateUserInfo(id, userInfo);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }

            return Request.CreateErrorResponse(HttpStatusCode.OK, "User was updated!");
        }


        [HttpGet]
        [Route("username/{username}/profile/info")]
        public IHttpActionResult GetUserInfo(string username)
        {
            try
            {
                var profile = userService.GetUsersInfo(username);
                var profileModel = new UpdateUserModel
                {
                    Id = profile.Id,
                    Description = profile.Description,
                    Firstname = profile.Fullname.Split(' ').First(),
                    Surname = profile.Fullname.Split(' ').Last(),
                    Username = profile.Username
                };

                return Ok(profileModel);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPatch]
        [Authorize]
        [Route("{id}/profile/avatar")]
        public HttpResponseMessage UpdateUserAvatar(string id)
        {
            HttpResponseMessage response = new HttpResponseMessage();
            var httpRequest = HttpContext.Current.Request;


            var currentUserId = HttpContext.Current.User.Identity.GetUserId();
            if (currentUserId != id)
            {
                return Request.CreateErrorResponse(HttpStatusCode.Forbidden, "Do not have permission!");
            }


            HttpPostedFile file = null;
            if (httpRequest.Files.Count > 0)
            {
                file = httpRequest.Files.Get("avatar");
            }

            // Check if we have a file
            if (file == null)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "File was not chosen");

            // Make sure the file has content
            if (!(file.ContentLength > 0))
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "File is empty");


            byte[] avatar = null;
            using (var binaryReader = new BinaryReader(file.InputStream))
            {
                avatar = binaryReader.ReadBytes(file.ContentLength);
            }

            try
            {
                userService.UpdateUserAvatar(avatar, file.FileName, currentUserId);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }

            return Request.CreateResponse(HttpStatusCode.OK, "Avatar was changed!");
        }


        // DELETE: api/User/5
        [Authorize]
        public HttpResponseMessage Delete(string id)
        {
            if (HttpContext.Current.User.Identity.GetUserId() != id)
            {
                return Request.CreateErrorResponse(HttpStatusCode.Forbidden, "The request if forbidden");
            }
            try
            {
                userService.DeleteUser(id);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }

            return Request.CreateErrorResponse(HttpStatusCode.OK, "User was deleted");
        }


        [Authorize(Roles = ("admin"))]
        public HttpResponseMessage DeleteByAdmin(string id)
        {
            try
            {
                userService.DeleteUser(id);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }

            return Request.CreateErrorResponse(HttpStatusCode.OK, "User was deleted");
        }
        
    }
}
