﻿using PhotoAlbumCore.Interfaces;

using System;
using System.Linq;
using ORM.Repositories;
using ORM;
using System.Collections.Generic;
using PhotoAlbumCore.Entities;
using System.Web;
using System.IO;
using PhotoAlbum.BLL.PagingModels;
using PhotoAlbum.BLL.Interface;
using AutoMapper;
using PhotoAlbum.BLL.DTOs;
using System.Runtime.InteropServices;
using PhotoAlbum.BLL.Infrastucture;
using System.Threading;
//using PhotoAlbum.BLL.CustomMapper;

namespace PhotoAlbum.BLL.Services
{
    public class ImageService : IImageService
    {

        IUnitOfWork Database { get; set; }
        public ImageService(IUnitOfWork unit)
        {
            Database = unit;
        }


       
        public ImagePost GetSingleImage(int id)
        {
            Image returnImage = Database.ImageRepository.Find(id);
            if (returnImage == null)
            {
                throw new ArgumentException("Invalid image id");
            }

            ImagePost imageDTO = Mapper.Map<ImagePost>(returnImage);
            return imageDTO;
        }
        
        

        public void DeleteImage(int imageId, string userId)
        {
            if (string.IsNullOrEmpty(userId))
            {
                throw new ArgumentNullException();
            }

            Image imageToDelete = Database.ImageRepository.Find(imageId);
            if (imageToDelete == null)
            {
                throw new ArgumentNullException("Invalid image id");
            }

            if (imageToDelete.UserId != userId)
            {
                throw new ArgumentNullException("UserId of image does not coincide with userId in parameters");
            }

            var fullImagePath = Path.Combine(PhysicalDirectory.CurrentServerLocation,
                imageToDelete.LocalPath);

            try
            {
                Database.ImageRepository.Delete(imageToDelete);
                Database.Commit();
                PhysicalDirectory.DeleleImageFromServerPhysically(fullImagePath);
            }
            catch (Exception)
            {
                throw;
            }
        }



        public void GiveLike(string userId, int imageId)
        {
            var image = Database.ImageRepository.Find(imageId);
            if (image == null)
            {
                throw new NullReferenceException("Invalid image Id");
            }
         

            var user = Database.UserRepository.Find(userId);
            if (user == null)
            {
                throw new NullReferenceException("Invalid user Id");
            }


            Like like = image.Likes.FirstOrDefault(p => p.UserId == user.Id);
            if (like == null)
            {
                like = new Like() { User = user, Image = image };

                image.NumberOfLikes++;
                image.Likes.Add(like);

                Database.LikeRepository.Add(like);
            }
            else
            {
                image.Likes.Remove(like);
                image.NumberOfLikes--;
                Database.LikeRepository.Delete(like);
            }

            Database.ImageRepository.Update(image);
            Database.Commit();
        }



        public void EditImage(int id, string description, List<string> tagslist, string userId)
        {

            var imageToModify = Database.ImageRepository.Find(id);
            if (imageToModify == null)
            {
                throw new ArgumentNullException(nameof(id), "Invalid image Id");
            }
            if (imageToModify.UserId != userId)
            {
                throw new ArgumentNullException(nameof(userId), "User ID of image does not coincide with inputed user ID");
            }


            List<Tag> tags = AddTags(tagslist, imageToModify);

            imageToModify.Tags = tags;
            imageToModify.Description = description;

            Database.ImageRepository.Update(imageToModify);
            Database.Commit();

        }



        /// <summary>
        /// This is protected method for adding or updating Tags in 
        /// database 
        /// /// </summary>
        /// <param name="inputedTags"></param>
        /// <param name="image"></param>
        /// <returns>List of newly created or updated tags</returns>
        protected List<Tag> AddTags(List<string> inputedTags, Image image)
        {
            if (inputedTags == null)
            {
                return null;
            }

            List<Tag> tagList = new List<Tag>();
            foreach (var individualTag in inputedTags)
            {
                Tag tag = ((ITagRepository)Database.TagRepository).GetTag(individualTag);
                if (tag != null)
                {
                    if (!tag.Images.Contains(image))
                    {
                        tag.Images.Add(image);
                    }

                    Database.TagRepository.Update(tag);
                    tagList.Add(tag);
                }
                else
                {
                    tag = new Tag() { Description = individualTag };
                    tag.Images.Add(image);
                    tagList.Add(tag);
                    Database.TagRepository.Add(tag);
                }
            }
            return tagList;
        }


        public void AddImage(UploadedImage image)
        {
            string fileExtension = Path.GetExtension(image.FileName);
            string fileName = Guid.NewGuid() + fileExtension;

            UserProfile user = Database.UserRepository.Find(image.UserId);
            if (user == null)
            {
                throw new NullReferenceException("Invalid User id");
            }

            //will be written into photo data
            var localpath = Path.Combine(PhysicalDirectory.ImagesStoreFolder, user.Id, fileName);
            var fullImagePath = Path.Combine(PhysicalDirectory.CurrentServerLocation, localpath);

            PhysicalDirectory.WriteImageOnServerPhysically(image.Buffer, fullImagePath);

            Image newImage = new Image
            {
                User = user,
                LocalPath = localpath,
                ImageName = fileName,
                Description = image.Description,
            };
            newImage.Tags = AddTags(image.Tags, newImage);

            try
            {
                Database.ImageRepository.Add(newImage);
                Database.Commit();
            }
            catch (Exception)
            {
                //Rolling Back happend an error
                PhysicalDirectory.DeleleImageFromServerPhysically(fullImagePath);
                throw;
            }

        }


        public Post GetRecent(int pageIndex, int itemsPerPage)
        {
            var itemsOnPage = ((IImageRepository)Database.ImageRepository)
             .GetRecent(pageIndex, itemsPerPage);

            int count = ((IImageRepository)Database.ImageRepository)
                        .ImagesQuantity();

            var images = Mapper.Map<List<ImagePost>>(itemsOnPage);
            Post post = new Post
            {
                Images = images,
                PageParameters = new PagingParameter()
                {
                    ItemsPerPage = itemsPerPage,
                    PageIndex = pageIndex,
                    TotalItems = count
                },

            };
            return post;
        }
    }
}
