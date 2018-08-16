using PhotoAlbumCore.Entities;
using PhotoAlbumCore.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace ORM.Repositories
{
    public class TagRepository : EFRepository<Tag>, ITagRepository
    {
        public TagRepository(PhotoAlbumContext dbContext) : base(dbContext)
        {
        }

        public IEnumerable<Image> GetImagesByTagName(string tagName)
        {
            return dbSet
                .FirstOrDefault(p => p.Description == tagName)?
                .Images
                .ToList();
        }

        public Tag GetTagByTagName(string tagName,
            int pageIndex, int itemsPerPage)
        {
            IQueryable<Tag> query = dbSet.AsQueryable();


            //find the tag and include image collection
            query.Where(p => p.Description == tagName)
               .Include(p => p.Images)
               .Skip((pageIndex - 1) * itemsPerPage)
               .Take(itemsPerPage);

            return dbSet.FirstOrDefault();

        }

        public Tag GetTag(int tagId)
        {

            return dbSet
                .FirstOrDefault(p => p.Id == tagId);

        }
        


        /// <summary>
        /// Returns Tag which has sorted images by Datetime
        /// and taken by pageindex and itemsPerPage
        /// </summary>
        /// <param name="tagId"></param>
        /// <param name="pageIndex"></param>
        /// <param name="itemsPerPage"></param>
        /// <returns></returns>
        public Tag GetTagWithRecentImages(int tagId,
              int pageIndex, int itemsPerPage)
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

            var sortedImages = tag.Images
                .OrderByDescending(i => i.Created)
                .Skip((pageIndex - 1) * itemsPerPage)
                .Take(itemsPerPage).ToList();

            tag.Images = sortedImages;
            return tag;

        }

        public Tag GetTagWithRecentImages(string tagName, int pageIndex, int itemsPerPage)
        {
            var tag = dbSet.FirstOrDefault(p => p.Description == tagName);
            if (tag == null)
            {
                return null;
            }
            return GetTagWithRecentImages(tag.Id, pageIndex, itemsPerPage);

        }




        public Tag GetTag(string name)
        {
            return dbSet
                .FirstOrDefault(p => p.Description == name);

        }

        public async Task<List<Tag>> GetTagsBySubstringAsync(string substring)
        {
            return await dbSet
                         .Where(p => p.Description.Contains(substring))
                         .Take(5)
                         .ToListAsync();

        }


    }
}