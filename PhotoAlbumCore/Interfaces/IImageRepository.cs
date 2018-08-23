using PhotoAlbumCore.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PhotoAlbumCore.Interfaces
{
    public interface IImageRepository
    {
        IEnumerable<Image> GetRecent(int pageindex, int itemsPerPage);
        int ImagesQuantity(string userId);
        int ImagesQuantity();
    }
}
