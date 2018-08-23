using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace PhotoAlbum.Web.Models
{
    public class UpdateImageModel
    {
        [MaxLength(200)]
        public string Description { get; set; }
        public List<string> Tags { get; set; }

    }
}