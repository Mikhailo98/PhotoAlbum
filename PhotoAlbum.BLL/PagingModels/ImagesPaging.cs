using PhotoAlbum.BLL.DTOs;
using PhotoAlbumCore.Entities;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PhotoAlbum.BLL.PagingModels
{
    public class ImagesPage
    {
        public List<ImageDTO> Images { get; set; }
        public PagingParameter Parameters { get; set; }
    }
}
