using PhotoAlbum.BLL.DTOs;
using System.Collections.Generic;

namespace PhotoAlbum.BLL.PagingModels
{
    public class ImagePost
    {
        public ImageDTO Image { get; set; }
        public List<TagDTO> Tags { get; set; }
        public List<LikeDTO> Likes { get; set; }
    }

}
