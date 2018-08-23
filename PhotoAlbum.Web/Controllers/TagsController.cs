using AutoMapper;
using Microsoft.AspNet.Identity;
using PhotoAlbum.BLL.Interface;
using PhotoAlbum.Web.Models;
using System;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using PhotoAlbum.Web.Infrastructure;
using System.Collections.Generic;
using PhotoAlbum.BLL.DTOs;
using System.Threading.Tasks;

namespace PhotoAlbum.Web.Controllers
{

    [RoutePrefix("api/tags")]
    public class TagsController : ApiController
    {
        ITagService tagService;

        public TagsController(ITagService tagservice)
        {
            tagService = tagservice;
        }


        /// <summary>
        /// Gets Recent Images With Particular Tag Id
        /// </summary>
        /// <param name="search"></param>
        /// <param name="uriParameters"></param>
        /// <returns></returns>
        // GET: api/Tags
        [Route("{tagId:int:min(0)}/images/recent")]
        [HttpGet]
        public IHttpActionResult GetRecentImagesByTagId(int tagId, [FromUri]UriParameters uriParameters)
        {

            try
            {
                var tags = tagService.GetTagWithImages
                    (tagId, uriParameters.PageIndex, uriParameters.ItemsPerPage);

                var profileModel = Mapper.Map<TagViewModel>(tags);

                string requestUser = HttpContext.Current.User.Identity.GetUserId();
                if (!string.IsNullOrEmpty(requestUser))
                {
                    profileModel.Images.IsLikedCheck(requestUser);
                }

                return Ok(profileModel);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        /// <summary>
        /// Gets tags that fits 
        /// /// </summary>
        /// <param name="substring"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("{substring}/search")]
        public async Task<IHttpActionResult> GetTagsListBySubstring(string substring)
        {
            try
            {
                var result =  tagService.GetTagsList(substring);
                List<TagModel> tagModels = Mapper.Map<List<TagModel>>(await result);
                return Ok(tagModels);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        /// <summary>
        /// Gets images with particular tag name
        /// </summary>
        /// <param name="tag"></param>
        /// <param name="parameters"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("name/{tag}/images")]
        public IHttpActionResult GetImagesByTag(string tag, [FromUri]UriParameters parameters)
        {
            try
            {
                var tags = tagService.GetTagWithImages(tag,
               parameters.PageIndex, parameters.ItemsPerPage);

                var profileModel = Mapper.Map<TagViewModel>(tags);

                string requestUser = HttpContext.Current.User.Identity.GetUserId();
                if (!string.IsNullOrEmpty(requestUser))
                {
                    profileModel.Images.IsLikedCheck(requestUser);
                }

                return Ok(profileModel);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }


        // POST: api/Tags
        [Authorize(Roles = "admin")]
        public IHttpActionResult Post([FromBody]TagModel tagModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var tag = Mapper.Map<TagDTO>(tagModel);

                if (tagModel.Id == 0)
                {
                    tagService.AddNewTag(tag);
                }
                else
                {
                    tagService.UpdateTag(tag);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok("Tag was added successfully");
        }


        [HttpDelete]
        [Route("{id:int:min(0)}")]
        [Authorize(Roles = "admin")]
        public HttpResponseMessage Delete(int id)
        {
            if (id <= 0)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Invalid image id");
            }
            try
            {
                tagService.DeleteTag(id);
                return Request.CreateErrorResponse(HttpStatusCode.OK, "Tag was deleted!");
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
    }
}
