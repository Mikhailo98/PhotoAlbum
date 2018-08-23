using PhotoAlbumCore.Entities;
using PhotoAlbumCore.Interfaces;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace ORM.Repositories
{
    public class UserRepository : EFRepository<UserProfile>, IUserRepository
    {
        #region .ctor

        public UserRepository(PhotoAlbumContext context) : base(context)
        {
        }
        #endregion

        public UserProfile GetPagedUserByUsername(string userName, int pageIndex, int itemsPerPage)
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

            return new UserProfile()
            {
                Id = user.Id,
                AvatarUrl = user.AvatarUrl,
                Description = user.Description,
                Fullname = user.Fullname,
                Images = SortUserImages(user.Images, pageIndex, itemsPerPage),
                UserName = user.UserName,
                Publications = user.Images.Count
            };
        }

        protected List<Image> SortUserImages(ICollection<Image> images, int pageIndex, int itemsPerPage)
        {
            return images
               .OrderByDescending(i => i.Created)
               .Skip((pageIndex - 1) * itemsPerPage)
               .Take(itemsPerPage).ToList();
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

            return new UserProfile()
            {
                Id = user.Id,
                AvatarUrl = user.AvatarUrl,
                Description = user.Description,
                Fullname = user.Fullname,
                Images = SortUserImages(user.Images, pageIndex, itemsPerPage),
                UserName = user.UserName,
                Publications = user.Images.Count
            };
        }

        public UserProfile GetUserByUserName(string userName)
        {
            return dbSet.FirstOrDefault(p => p.UserName == userName);
        }

    }
}
