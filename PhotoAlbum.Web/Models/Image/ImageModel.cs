using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PhotoAlbum.Web.Models
{
    public class ImageModel
    {

        public int Id { get; set; }

        public DateTime Created { get; set; }
        public string Description { get; set; }
        public int NumberOfLikes { get; set; }

        public string ImageName { get; set; }
        public string LocalPath { get; set; }

        public string UserId { get; set; }
        public string UserName { get; set; }
        public string UserAvalarUrl { get; set; }

        public bool IsLiked { get; set; }
    }
}