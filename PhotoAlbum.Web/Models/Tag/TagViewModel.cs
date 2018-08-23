using System.Collections.Generic;

namespace PhotoAlbum.Web.Models
{
    public class TagViewModel
    {
        public TagModel Tag { get; set; }
        public List<ImageViewModel> Images { get; set; }
        public PageParameters Parameters { get; set; }

    }
}