using AutoMapper;
using ORM;
using ORM.Repositories;
using PhotoAlbum.BLL.DTOs;
using PhotoAlbum.BLL.Interface;
using PhotoAlbum.BLL.PagingModels;
using PhotoAlbumCore.Entities;
using PhotoAlbumCore.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PhotoAlbum.BLL.Services
{
    public class TagService : ITagService
    {
        private IUnitOfWork Database { get; set; }


        public TagService(IUnitOfWork unit)
        {
            Database = unit;
        }


        public void AddNewTag(TagDTO newTag)
        {

            Tag tag = ((ITagRepository)Database.TagRepository).GetTag(newTag.Description);
            if (tag != null)
            {
                throw new ArgumentException("Tag already exists");
            }

            tag = Mapper.Map<Tag>(newTag);
            Database.TagRepository.Add(tag);
            Database.Commit();

        }

        public void UpdateTag(TagDTO updateTag)
        {

            var tag = Database.TagRepository.GetById(updateTag.Id);
            if (tag == null)
            {
                throw new ArgumentException("Invalid tags' id");
            }

            if (((ITagRepository)Database.TagRepository).GetTag(updateTag.Description) != null)
            {
                throw new ArgumentException("Tag with same name is already exists");
            }

            tag.Description = updateTag.Description;
            Database.TagRepository.Update(tag);
            Database.Commit();
        }

        public void DeleteTag(int id)
        {
            var tag = Database.TagRepository.GetById(id);
            if (tag == null)
            {
                throw new ArgumentException("Invalid tags' id");
            }

            Database.TagRepository.Delete(tag);
            Database.Commit();


        }

        public async Task<List<TagDTO>> GetTagsList(string substring)
        {
            if (string.IsNullOrEmpty(substring))
            {
                return null;
            }

            var result = await ((ITagRepository)Database.TagRepository).GetTagsBySubstringAsync(substring);
            var dtoresult = Mapper.Map<List<TagDTO>>(result);
            return dtoresult;
        }

        public TagPage GetTagWithImages(int tagId, int pageIndex, int itemsPerPage)
        {


            var result = ((ITagRepository)Database.TagRepository)
                .GetTagWithRecentImages(tagId, pageIndex, itemsPerPage);

            var t = Mapper.Map<TagDTO>(result);


            var tagdto = Mapper.Map<TagDTO>(result);
            var imagedto = Mapper.Map<List<ImagePost>>(result.Images);

            var r = new TagPage()
            {
                Tag = tagdto,
                Images = imagedto
            };

            return r;
        }



        public TagPage GetTagWithImages(string tag, int pageIndex, int itemsPerPage)
        {

            var result = ((ITagRepository)Database.TagRepository)
                           .GetTagWithRecentImages(tag, pageIndex, itemsPerPage);

            var t = Mapper.Map<TagDTO>(result);


            var tagdto = Mapper.Map<TagDTO>(result);
            var imagedto = Mapper.Map<List<ImagePost>>(result.Images);

            var r = new TagPage()
            {
                Tag = tagdto,
                Images = imagedto
            };

            return r;
        }
    }
}
