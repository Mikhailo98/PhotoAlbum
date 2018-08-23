using PhotoAlbum.BLL.DTOs;
using System.Collections.Generic;

namespace PhotoAlbum.BLL.PagingModels
{
   
    public class UserProfilePage
    {
        public UserDTO User { get; set; }
        public List<ImagePost> Images { get; set; }
        public PagingParameter Parameters { get; set; }
    }

}
