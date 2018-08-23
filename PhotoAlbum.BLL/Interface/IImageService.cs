using PhotoAlbum.BLL.PagingModels;
using System.Collections.Generic;

namespace PhotoAlbum.BLL.Interface

{
    public interface IImageService
    {
       
        void GiveLike(string userId, int imageId);
        void DeleteImage(int id, string userId);
        void EditImage(int id, string description, List<string> tagslist, string userId);
        void AddImage(UploadedImage image);

        ImagePost GetSingleImage(int id);
        Post GetRecent(int pageIndex, int itemsPerPage);
    }
}
