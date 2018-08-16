using System;
using System.Collections.Generic;

namespace ORM.Entities
{
    public class Album
    {
        public int Id { get; set; }
        public string AvatarUrl { get; set; }
        public string Name { get; set; }
        public DateTime Created { get; set; }

        public int UserId { get; set; }
        public virtual User User { get; set; }

        public virtual ICollection<Image> Images { get; set; }

    }
}