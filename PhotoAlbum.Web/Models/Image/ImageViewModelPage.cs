using System.Collections.Generic;

namespace PhotoAlbum.Web.Models
{
   public class ImageViewModelPage
   {
       public List<ImageViewModel> Images { get; set; }
       public PageParameters PageParameters { get; set; }
   }

}