using PhotoAlbumCore.Entities;
using PhotoAlbumCore.Interfaces;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace ORM.Repositories
{
    public class ImageRepository : EFRepository<Image>, IImageRepository
    {
        public ImageRepository(PhotoAlbumContext context) : base(context)
        {
        }


        public int ImagesQuantity(string userId)
        {
            IQueryable<Image> query = dbSet;

            if (!string.IsNullOrEmpty(userId))
            {
                query = query.Where(p => p.UserId == userId);
            }

            return query.Count();
        }
            
        public int ImagesQuantity()
        {
            return this.ImagesQuantity(null);
        }



        public IEnumerable<Image> GetRecent(int pageindex, int itemsPerPage)
        {
            return dbSet
                      .Include(p => p.Tags)
                      .Include(p => p.User)
                      .OrderByDescending(p => p.Created)
                      .Skip((pageindex - 1) * itemsPerPage)
                      .Take(itemsPerPage)
                      .ToList();
        }
    }
}