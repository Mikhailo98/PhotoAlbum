using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PhotoAlbumCore.Entities
{
    public class Image
    {
        public int Id { get; set; }

        public DateTime Created { get; set; }
        public string Description { get; set; }
        public int NumberOfLikes { get; set; }

        public string ImageName { get; set; }
        public string LocalPath { get; set; }

        public string UserId { get; set; }         //Foreign Key    
        public virtual UserProfile User { get; set; }  //navigation property

        public virtual ICollection<Like> Likes { get; set; }
        public virtual ICollection<Tag> Tags { get; set; }

        public Image()
        {
            Created = DateTime.Now;
            Tags = new List<Tag>();
            Likes = new List<Like>();
        }
    }
}
