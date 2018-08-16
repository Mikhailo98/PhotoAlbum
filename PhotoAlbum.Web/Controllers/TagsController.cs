using AutoMapper;
using PhotoAlbum.BLL.DTOs;
using PhotoAlbum.BLL.Interface;
using PhotoAlbum.BLL.PagingModels;
using PhotoAlbum.Web.Models;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

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
        /// Gets Recent Images With Particular Tag
        /// </summary>
        /// <param name="search"></param>
        /// <param name="uriParameters"></param>
        /// <returns></returns>
        // GET: api/Tags
        [Route("{id:int:min(0)}/images/recent")]
        [HttpGet]
        public IHttpActionResult GetRecentImagesByTagId(int id, [FromUri]UriParameters uriParameters)
        {

            try
            {
                var result = tagService.GetTagWithImages
                    (id, uriParameters.PageIndex, uriParameters.ItemsPerPage);             

                return Ok(result);
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
        public async Task<IHttpActionResult>  GetTagsListBySubstring(string substring)
        {

            try
            {
                var result = await tagService.GetTagsList(substring);
                List<TagModel> tagModels = Mapper.Map<List<TagModel>>(result);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        ///invalid 
        ///try to move to tagsController or smth else
        [Route("{tag}/images")]
        public IHttpActionResult GetImagesByTag(string tag, [FromUri]PageParameters pagingParameterModel)
        {
            try
            {
                var result = tagService.GetTagWithImages(tag,
               pagingParameterModel.PageIndex, pagingParameterModel.ItemsPerPage);

                return Ok(result);
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
