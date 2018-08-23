using System.Collections.Generic;

namespace PhotoAlbum.Web.Models
{
    public class ImageViewModel
    {
        public ImageModel Image { get; set; }
        public List<TagModel> Tags { get; set; }
        public List<LikeModel> Likes { get; set; }
    }
}