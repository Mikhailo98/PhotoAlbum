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
        Tag GetTag(string name);
        Tag GetTagWithRecentImages(int tagId, int pageIndex, int itemsPerPage);
        Tag GetTagWithRecentImages(string tag, int pageIndex, int itemsPerPage);
        Task<List<Tag>> GetTagsBySubstringAsync(string substring);
    }
}
