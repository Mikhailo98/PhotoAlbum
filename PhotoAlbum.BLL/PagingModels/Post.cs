using System.Collections.Generic;

namespace PhotoAlbum.BLL.PagingModels
{
    public class Post
    {
        public List<ImagePost> Images { get; set; }
        public PagingParameter PageParameters { get; set; }
    }

}
