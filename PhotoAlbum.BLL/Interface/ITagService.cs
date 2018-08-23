using PhotoAlbum.BLL.DTOs;
using PhotoAlbum.BLL.PagingModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PhotoAlbum.BLL.Interface
{
    public interface ITagService
    {
        void DeleteTag(int id);
        void AddNewTag(TagDTO tag);
        void UpdateTag(TagDTO tag);

        Task<List<TagDTO>> GetTagsList(string substring);
        TagPage GetTagWithImages(int tagId, int pageIndex, int itemsPerPage);
        TagPage GetTagWithImages(string tag, int pageIndex, int itemsPerPage);

    }
}
