using System.ComponentModel.DataAnnotations;

namespace PhotoAlbum.Web.Models
{
    public class TagModel
    {
        public int Id { get; set; }
        [RegularExpression(@"^\w*$",
           ErrorMessage = "Invalid tag")]
        [MaxLength(20)]
        public string Description { get; set; }
        public int ImagesCount { get; set; }

    }
}