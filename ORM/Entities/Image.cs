using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ORM.Entities
{
    public class Image
    {
        public int Id { get; set; }
        //location in Storage
        public string Url { get; set; }
        public DateTime Created { get; set; }
        public string Description { get; set; }
        public int NumberOfLikes { get; set; }
        public int NumberOfComments { get; set; }

        //Foreign Key
        public int UserId { get; set; }
        public virtual User User { get; set; }  //navigation property

        public int? AlbumId { get; set; }
        public virtual Album Album { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }
        public virtual ICollection<Like> Likes { get; set; }
        public virtual ICollection<Tag> Tags { get; set; }
    }
}
