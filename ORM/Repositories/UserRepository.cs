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
    public class UserRepository : EFRepository<UserProfile>, IUserRepository
    {
        #region .ctor

        public UserRepository(PhotoAlbumContext context) : base(context)
        {
        }
        #endregion

        public UserProfile GetByUserName(string userName,int pageIndex, int itemsPerPage)
        {
            var user = dbSet
                     .Where(p => p.UserName == userName)
                     .Include(p => p.Images)
                     .Include(p => p.Images.Select(m => m.Tags))
                     .FirstOrDefault();

            if (user == null)
            {
                return null;
            }

            var sortedImages = user.Images
                .OrderByDescending(i => i.Created)
                .Skip((pageIndex - 1) * itemsPerPage)
                .Take(itemsPerPage).ToList();

            user.Images = sortedImages;
            return user;
        }

        public UserProfile GetPagedUserProfile(string userid, int pageIndex, int itemsPerPage)
        {

            var user = dbSet
           .Where(p => p.Id == userid)
           .Include(p => p.Images)
           .Include(p => p.Images.Select(m => m.Tags))
           .FirstOrDefault();

            if (user == null)
            {
                return null;
            }

            var sortedImages = user.Images
                .OrderByDescending(i => i.Created)
                .Skip((pageIndex - 1) * itemsPerPage)
                .Take(itemsPerPage).ToList();

            user.Images = sortedImages;
            return user;


        }

        public UserProfile GetUserByUserName(string userName)
        {
            return dbSet.FirstOrDefault(p => p.UserName == userName);
        }

        public IEnumerable<UserProfile> GetUsersByFullname(string name)
        {

            return dbSet.Where(p => p.Fullname.Contains(name)).ToList();

        }

        /// <summary>
        /// Purpose for searching
        /// </summary>
        /// <param name="substring"></param>
        /// <returns></returns>
        public async Task<List<UserProfile>> GetUsersBySubstingAsync(string substring)
        {
            return await dbSet
                .Where(p => p.UserName.Contains(substring))
                .Take(5)
                .ToListAsync();

        }

    }
}
