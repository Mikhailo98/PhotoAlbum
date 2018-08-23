using PhotoAlbum.Web.Models;
using System.Collections.Generic;
using System.Linq;

namespace PhotoAlbum.Web.Infrastructure
{
    public static class ModelExtention
    {
        public static List<ImageViewModel> IsLikedCheck(this List<ImageViewModel> images, string currentUserId)
        {
            foreach (var item in images)
            {
                if (item.Likes.Any(p => p.UserId == currentUserId))
                {
                    item.Image.IsLiked = true;
                }
            }
            return images;
        }

    }
}