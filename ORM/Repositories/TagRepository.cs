using PhotoAlbumCore.Entities;
using PhotoAlbumCore.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;

namespace ORM.Repositories
{
    public class TagRepository : EFRepository<Tag>, ITagRepository
    {
        public TagRepository(PhotoAlbumContext dbContext) : base(dbContext)
        {
        }



        /// <summary>
        /// Returns Tag which has sorted images by Datetime
        /// and taken by pageindex and itemsPerPage
        /// </summary>
        /// <param name="tagId"></param>
        /// <param name="pageIndex"></param>
        /// <param name="itemsPerPage"></param>
        /// <returns></returns>
        public Tag GetTagWithRecentImages(int tagId, int pageIndex, int itemsPerPage)
        {
            var tag = dbSet
            .Where(p => p.Id == tagId)
            .Include(p => p.Images)
            .Include(p => p.Images.Select(m => m.User))
            .Include(p => p.Images.Select(m => m.Tags))
            .FirstOrDefault();

            if (tag == null)
            {
                return null;
            }

            return new Tag()
            {
                Id = tag.Id,
                Images = SortImages(tag.Images, pageIndex, itemsPerPage),
                ImagesCount = tag.Images.Count,
                Description = tag.Description
            };

        }

        public Tag GetTagWithRecentImages(string tagName, int pageIndex, int itemsPerPage)
        {

            var tag = dbSet
                      .Where(p => p.Description == tagName)
                      .Include(p => p.Images)
                      .Include(p => p.Images.Select(m => m.User))
                      .Include(p => p.Images.Select(m => m.Tags))
                      .FirstOrDefault();

            if (tag == null)
            {
                return null;
            }

            return new Tag()
            {
                Id = tag.Id,
                Images = SortImages(tag.Images, pageIndex, itemsPerPage),
                ImagesCount = tag.Images.Count,
                Description = tag.Description
            };
        }

        protected List<Image> SortImages(ICollection<Image> images, int pageIndex, int itemsPerPage)
        {
            return images
               .OrderByDescending(i => i.Created)
               .Skip((pageIndex - 1) * itemsPerPage)
               .Take(itemsPerPage).ToList();
        }


        public Tag GetTag(string name)
        {
            return dbSet
                .FirstOrDefault(p => p.Description == name);
        }

        public async Task<List<Tag>> GetTagsBySubstringAsync(string substring)
        {
            var newList = await dbSet
                         .Where(p => p.Description.Contains(substring))
                         .Take(5)
                         //.Include(p => p.Images)
                         .ToListAsync();

            return newList.Select(p => new Tag()
            {
                Id = p.Id,
                Description = p.Description,
                ImagesCount = p.Images.Count
            }).ToList();

        }
    }
}
