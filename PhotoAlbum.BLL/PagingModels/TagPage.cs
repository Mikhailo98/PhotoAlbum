using PhotoAlbum.BLL.DTOs;
using System.Collections.Generic;

namespace PhotoAlbum.BLL.PagingModels
{
    public class TagPage
    {
        public TagDTO Tag { get; set; }
        public List<ImagePost> Images { get; set; }
        public PagingParameter Parameters { get; set; }  
    }

}
