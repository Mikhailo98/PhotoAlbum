using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PhotoAlbum.Web.Models
{
    public class TagModel
    {
        public int Id { get; set; }
        [RegularExpression(@"^\w*$",
           ErrorMessage = "Invalid tag")]
        public string Description { get; set; }
        public int ImagesCount { get; set; }

    }
}