using System;

namespace PhotoAlbum.BLL.PagingModels
{
    public class PagingParameter
    {
        public int PageIndex { get; set; }
        public int ItemsPerPage { get; set; }
        public int TotalItems { get; set; }
        public int TotalPages
        {
            get { return (int)Math.Ceiling((decimal)TotalItems / ItemsPerPage); }
        }
    }
}

