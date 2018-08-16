using System;
using System.Collections.Generic;

namespace ORM.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Description { get; set; }
        public string AvatarUrl { get; set; }

        public virtual ICollection<Album> Albums { get; set; }
        public virtual ICollection<Image> Images { get; set; }
    }
}