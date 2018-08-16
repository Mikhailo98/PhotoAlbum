using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PhotoAlbum.Web.Models
{
    public class LikeModel
    {
        public int ImageId { get; set; }
        public string UserId { get; set; }
    }
}