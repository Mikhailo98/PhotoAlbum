using PhotoAlbum.BLL.DTOs;
using PhotoAlbumCore.Entities;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PhotoAlbum.BLL.PagingModels
{
    public class ImagesPage
    {
        public List<ImageDTO> Images { get; set; }
        public PagingParameterDTO Parameters { get; set; }
    }



    public class Post
    {
        public List<ImagePost> Images { get; set; }
        public PagingParameterDTO PageParameters { get; set; }
    }


    /// <summary>
    /// 
    /// </summary>
    public class ImagePost
    {
        public ImageDTO Image { get; set; }
        public List<TagDTO> Tags { get; set; }
        public List<LikePlain> Likes { get; set; }
    }

    public class LikePlain
    {
        public int ImageId { get; set; }
        public string UserId { get; set; }
    }

}
