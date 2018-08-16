using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PhotoAlbum.Web.Models
{
    public class PageParameters : UriParameters
    {
        public int TotalItems { get; }
        public int TotalPages
        {
            get { return (int)Math.Ceiling((decimal)TotalItems / ItemsPerPage); }
        }
    }

    public class UriParameters
    {
        public int PageIndex { get; set; } = 1;
        public int ItemsPerPage { get; set; } = 9;

    }

}