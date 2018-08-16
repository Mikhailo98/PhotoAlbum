using PhotoAlbum.BLL.DTOs;
using System.Collections.Generic;

namespace PhotoAlbum.BLL.PagingModels
{
    /// <summary>
    /// View Of Profile
    /// </summary>
    public class UserProfilePage
    {
        public UserDTO User { get; set; }
        public List<ImagePost> Images { get; set; }
        public PagingParameterDTO Parameters { get; set; }
    }

}
