using PhotoAlbumCore.Entities;
using PhotoAlbumCore.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ORM.Repositories
{
    public class ImageRepository : EFRepository<Image>, IImageRepository
    {
        public ImageRepository(PhotoAlbumContext context) : base(context)
        {
        }

        public IEnumerable<Image> GetUsersImages(string userId, int pageIndex, int itemsperPage)
        {

            return dbSet
                   .Where(p => p.UserId == userId)
                   .Include(p => p.Tags)
                   .Include(p => p.User)
                   .OrderByDescending(p => p.Created)
                   .Skip((pageIndex - 1) * itemsperPage)
                   .Take(itemsperPage)
                   .ToList();
          
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