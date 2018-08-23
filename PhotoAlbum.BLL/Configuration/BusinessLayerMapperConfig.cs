using AutoMapper;
using PhotoAlbum.BLL.DTOs;
using PhotoAlbum.BLL.PagingModels;
using PhotoAlbumCore.Entities;

namespace PhotoAlbum.BLL.Configuration
{
    public class BusinessLayerMapperConfig : Profile
    {
        public BusinessLayerMapperConfig()
        {


            CreateMap<UserProfile, UserDTO>();

            CreateMap<Image, ImageDTO>()
                .ForMember(p => p.UserId, opt => opt.MapFrom(b => b.User.Id))
                .ForMember(p => p.UserName, opt => opt.MapFrom(b => b.User.UserName))
                .ForMember(p => p.UserAvalarUrl, opt => opt.MapFrom(b => b.User.AvatarUrl));


            CreateMap<ImageDTO, Image>()
                .ForAllOtherMembers(p => p.UseDestinationValue());


            CreateMap<Tag, TagDTO>();


            CreateMap<TagDTO, Tag>()
               .ForMember(p => p.Images, opt => opt.Ignore());


            CreateMap<Image, ImagePost>()
                .ForMember(p => p.Image, opt => opt.MapFrom(b => b))
                .ForMember(p => p.Tags, opt => opt.MapFrom(b => b.Tags));

            CreateMap<Like, LikeDTO>();
        }


    }
}
