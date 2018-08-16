using System.Collections.Generic;

namespace ORM.Entities
{
    public class Tag
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public virtual ICollection<Image> Images { get; set; }

    }
}