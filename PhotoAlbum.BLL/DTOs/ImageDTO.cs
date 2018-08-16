using System;

namespace PhotoAlbum.BLL.DTOs
{
    public class ImageDTO
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

    }

}
