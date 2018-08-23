using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using PhotoAlbum.BLL.DTOs;
using PhotoAlbum.BLL.Interface;
using PhotoAlbum.Web.Models;


namespace PhotoAlbum.Web.Controllers
{
    [Authorize]
    [RoutePrefix("api/Account")]
    public class AccountController : ApiController
    {
        private IUserService userService;

        public AccountController(IUserService userService)
        {
            this.userService = userService;
        }


        // POST api/Account/Register
        [AllowAnonymous]
        [Route("Register")]
        public async Task<IHttpActionResult> Register(RegisterUser model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = new UserRegisterDTO()
            {
                UserName = model.UserName,
                Password = model.Password,
                Email = model.Email,
                Fullname = model.FirstName + " " + model.Surname,
                PhoneNumber = model.PhoneNumber
            };

            IdentityResult result = await userService.Register(user);

            if (!result.Succeeded)
            {
                return GetErrorResult(result);
            }

            return Ok("User was registered successfully");
        }



        private IHttpActionResult GetErrorResult(IdentityResult result)
        {
            if (result == null)
                return InternalServerError();

            if (!result.Succeeded)
            {
                if (result.Errors != null)
                    foreach (string error in result.Errors)
                        ModelState.AddModelError("", error);


                if (ModelState.IsValid)
                    return BadRequest();

                return BadRequest(ModelState);
            }
            return null;
        }
    }
}
