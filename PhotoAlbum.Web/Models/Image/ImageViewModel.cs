using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PhotoAlbum.Web.Models
{
    public class ImageViewModel
    {
        public ImageModel Image { get; set; }
        public List<TagModel> Tags { get; set; }
        public List<LikeModel> Likes { get; set; }
    }
}