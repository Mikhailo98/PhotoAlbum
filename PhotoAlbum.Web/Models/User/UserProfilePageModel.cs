using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PhotoAlbum.Web.Models
{
    public class UserProfilePageModel
    {

        public UserModel User { get; set; }
        public List<ImageViewModel> Images { get; set; }
        public PageParameters Parameters { get; set; }

        public bool IsOwnProfile { get; set; } = false;
    }
}