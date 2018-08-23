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

            var tag = Database.TagRepository.Find(updateTag.Id);
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
            var tag = Database.TagRepository.Find(id);
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

            var result = ((ITagRepository)Database.TagRepository).GetTagsBySubstringAsync(substring);
            var dtoresult = Mapper.Map<List<TagDTO>>(await result);

            return dtoresult;
        }

        public TagPage GetTagWithImages(int tagId, int pageIndex, int itemsPerPage)
        {

            var returnedTag = ((ITagRepository)Database.TagRepository)
                .GetTagWithRecentImages(tagId, pageIndex, itemsPerPage);

            if (returnedTag == null)
            {
                throw new ArgumentException("Invalid tag ID");
            }


            var tagDto = Mapper.Map<TagDTO>(returnedTag);
            var imagesDto = Mapper.Map<List<ImagePost>>(returnedTag.Images);

            var tagPage = new TagPage()
            {
                Tag = tagDto,
                Images = imagesDto,
                Parameters = new PagingParameter()
                {
                    ItemsPerPage = itemsPerPage,
                    PageIndex = pageIndex,
                    TotalItems = tagDto.ImagesCount
                }
            };
            return tagPage;
        }



        public TagPage GetTagWithImages(string tag, int pageIndex, int itemsPerPage)
        {

            var returnedTag = ((ITagRepository)Database.TagRepository)
                           .GetTagWithRecentImages(tag, pageIndex, itemsPerPage);
            if (returnedTag == null)
            {
                throw new ArgumentException("Invalid tag name");
            }


            var tagResult = Mapper.Map<TagDTO>(returnedTag);


            var tagDto = Mapper.Map<TagDTO>(returnedTag);
            var imagesDto = Mapper.Map<List<ImagePost>>(returnedTag.Images);

            var tagPage = new TagPage()
            {
                Tag = tagDto,
                Images = imagesDto,
                Parameters = new PagingParameter()
                {
                    ItemsPerPage = itemsPerPage,
                    PageIndex = pageIndex,
                    TotalItems = tagDto.ImagesCount
                }
            };

            return tagPage;
        }
    }
}
