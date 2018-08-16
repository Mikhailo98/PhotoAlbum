using PhotoAlbumCore.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PhotoAlbumCore.Interfaces
{
    public interface ITagRepository
    {
        Tag GetTag(int tagId);
        Tag GetTag(string name);
        IEnumerable<Image> GetImagesByTagName(string name);
        Tag GetTagByTagName(string tagName, int pageIndex, int itemsPerPage);
        Tag GetTagWithRecentImages(int tagId, int pageIndex, int itemsPerPage);
        Tag GetTagWithRecentImages(string tag, int pageIndex, int itemsPerPage);
        Task<List<Tag>> GetTagsBySubstringAsync(string substring);


    }
}
