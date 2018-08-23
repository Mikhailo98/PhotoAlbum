using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace PhotoAlbumCore.Entities
{
    public class Tag
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public virtual ICollection<Image> Images { get; set; }

        [NotMapped]
        public int ImagesCount { get; set; }

        public Tag()
        {
            Images = new List<Image>();
        }
    }
}