using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using PhotoAlbum.Web.Models;
using PhotoAlbum.BLL.Interface;
using System.Web.Http;
using AutoMapper;
using Microsoft.AspNet.Identity;
using PhotoAlbum.BLL.PagingModels;
using System.Text.RegularExpressions;
using PhotoAlbum.Web.Infrastructure;

namespace PhotoAlbum.Web.Controllers
{
    [RoutePrefix("api/images")]
    public class ImagesController : ApiController
    {
        IImageService imageService;

        public ImagesController(IImageService imageservice)
        {
            imageService = imageservice;
        }

        /// <summary>
        /// Get All Recent Images
        /// </summary>
        /// <param name="uriParameters"></param>
        /// <returns></returns>
        [Route("recent")]
        [HttpGet]
        public IHttpActionResult GetRecent([FromUri]UriParameters uriParameters)
        {
            if (uriParameters == null)
            {
                uriParameters = new UriParameters();
            }

            Post result = imageService.GetRecent(uriParameters.PageIndex, uriParameters.ItemsPerPage);
            ImageViewModelPage postModel = Mapper.Map<Post, ImageViewModelPage>(result);

            string currentUserId = HttpContext.Current.User.Identity.GetUserId();
            if (!string.IsNullOrEmpty(currentUserId))
            {
                postModel.Images.IsLikedCheck(currentUserId);
            }

            return Ok(postModel);
        }


        [HttpPost]
        [Route("{imageId}/likes")]
        [Authorize(Roles = "user")]
        [Authorize]
        public IHttpActionResult LikeImage(int imageId)
        {
            if (imageId <= 0)
            {
                return BadRequest(message: "Invalid image id");
            }

            try
            {
                string userId = HttpContext.Current.User.Identity.GetUserId();
                imageService.GiveLike(userId, imageId);
                return Ok();

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }



        // GET: api/Image/5
        /// <summary>
        /// Get specific image
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("{id:int}")]
        public IHttpActionResult GetSingleImage(int id)
        {
            if (id <= 0)
            {
                return BadRequest(message: "Invalid image id");
            }

            try
            {
                var result = imageService.GetSingleImage(id);
                var model = Mapper.Map<ImageViewModel>(result);

                string currentUserId = HttpContext.Current.User.Identity.GetUserId();

                if (!string.IsNullOrEmpty(currentUserId))
                {
                    if (model.Likes.Any(p => p.UserId == currentUserId))
                    {
                        model.Image.IsLiked = true;
                    }
                }

                return Ok(result);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [Authorize]
        [HttpPost]
        public HttpResponseMessage UploadImage()
        {
            var httpRequest = HttpContext.Current.Request;
            HttpPostedFile file = null;
            if (httpRequest.Files.Count > 0)
            {
                file = httpRequest.Files.Get("File");
            }

            if (file == null)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "File was not chosen");

            if (!file.ContentType.Contains("image"))
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Unsupported media type");
            }

            if (!(file.ContentLength > 0))
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "File is empty");


            string description = httpRequest.Params.Get("Description");
            List<string> tagsArray = httpRequest.Params.GetValues("Tags")?.ToList();
            if (tagsArray != null)
            {
                var tagRegex = tagsArray.All(p => { return Regex.IsMatch(p, @"^\w*$"); });
                if (tagRegex == false)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Tag should contain only alphanumeric values and should not contain white spaces");
                }
            }

            byte[] image = null;
            using (var binaryReader = new BinaryReader(file.InputStream))
            {
                image = binaryReader.ReadBytes(file.ContentLength);
            }


            UploadedImage uploadedImage = new UploadedImage
            {
                Buffer = image,
                Description = description,
                Tags = tagsArray,
                FileName = file.FileName,
                UserId = HttpContext.Current.User.Identity.GetUserId(),
            };

            try
            {
                imageService.AddImage(uploadedImage);
                return Request.CreateResponse(HttpStatusCode.OK, "Photo uploaded successfully");
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }




        // Patch: api/Image/5
        [HttpPatch]
        [Route("{id:int}")]
        [Authorize]
        public IHttpActionResult EditImage(int id, [FromBody]UpdateImageModel model)
        {
            if (id <= 0)
                return BadRequest("Invalid image id");

            var tagRegex = model.Tags.All(p =>
            {
                return Regex.IsMatch(p, @"^\w*$") && p.Length < 20;
            });
            if (tagRegex == false)
            {
                return BadRequest("Tag should contain only alphanumeric values and should not contain white spaces");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                string userId = HttpContext.Current.User.Identity.GetUserId();
                imageService.EditImage(id, model.Description, model.Tags, userId);
            }
            catch (ArgumentNullException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.GetBaseException().Message);
            }

            return Ok("Image was updated");

        }


        // DELETE: api/Image/5
        [Authorize]
        [Route("{id:int}")]
        public HttpResponseMessage Delete(int id)
        {

            if (id <= 0)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Image Id can't be zero or less");

            try
            {
                imageService.DeleteImage(id, HttpContext.Current.User.Identity.GetUserId());
            }
            catch (ArgumentNullException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.Forbidden, ex.Message);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }

            return Request.CreateResponse(HttpStatusCode.OK, "Image was successfully deleted");

        }

        [HttpDelete]
        [Route("{imageId}/userid/{userId}")]
        [Authorize(Roles = "admin")]
        public IHttpActionResult DeleteImage(string userId, int imageId)
        {

            try
            {
                imageService.DeleteImage(imageId, userId);
            }
            catch (ArgumentNullException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok("Image was deleted successfully");

        }
    }
}
