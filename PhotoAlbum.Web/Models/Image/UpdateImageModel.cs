using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PhotoAlbum.Web.Models
{
    public class UpdateImageModel
    {
        [MaxLength(200)]
        public string Description { get; set; }
        public List<string> Tags { get; set; }

    }
}