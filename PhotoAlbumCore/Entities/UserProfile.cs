using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace PhotoAlbumCore.Entities
{
    public class UserProfile
    {

        [ForeignKey("ApplicationUser")]
        public string Id { get; set; }
        public string UserName { get; set; }
        public string Description { get; set; }
        public string AvatarUrl { get; set; }
        public string Fullname { get; set; }

        public virtual ICollection<Image> Images { get; set; }
        public virtual ApplicationUser ApplicationUser { get; set; }

        public UserProfile()
        {
            Images = new List<Image>();
        }
    }
}