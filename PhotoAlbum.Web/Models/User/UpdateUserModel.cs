using System.ComponentModel.DataAnnotations;

namespace PhotoAlbum.Web.Models
{
    public class UpdateUserModel
    {

        public string Id { get; set; }
        [Required]
        [RegularExpression("^[a-z0-9_-]{3,25}$")]
        public string Username { get; set; }

        [MaxLength(200)]
        public string Description { get; set; }

        [Required]
        [RegularExpression("^[A-Z]{1}[a-z]{1,15}$")]
        public string Firstname { get; set; }

        [Required]
        [RegularExpression("^[A-Z]{1}[a-z]{1,15}$")]
        public string Surname { get; set; }

    }
}