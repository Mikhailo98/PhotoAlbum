using AutoMapper;
using PhotoAlbum.BLL.Configuration;
using PhotoAlbum.BLL.DTOs;
using PhotoAlbum.BLL.PagingModels;
using PhotoAlbum.Web.Models;

namespace PhotoAlbum.Web
{
    public static class AutoMapperConfig
    {
        public static void Configure()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.AddProfile(new BusinessLayerMapperConfig());

                cfg.CreateMap<Post, PostModel>();
                cfg.CreateMap<ImagePost, ImageViewModel>();
                cfg.CreateMap<TagDTO, TagModel>();
                cfg.CreateMap<TagModel, TagDTO >();

                cfg.CreateMap<ImageDTO, ImageModel>();

                cfg.CreateMap<UserDTO, UserModel>();
                cfg.CreateMap<UserProfilePage, UserProfilePageModel>();

            //    cfg.CreateMap<PagingParameterDTO, PagingParameterDTOModel>();

            });

        }
    }
}