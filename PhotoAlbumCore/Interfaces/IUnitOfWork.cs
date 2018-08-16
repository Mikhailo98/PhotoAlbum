using PhotoAlbumCore.Entities;
using PhotoAlbumCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PhotoAlbumCore.Interfaces
{
    public interface IUnitOfWork
    {
        IRepository<Image> ImageRepository { get; }
        IRepository<Tag> TagRepository { get; }
        IRepository<UserProfile> UserRepository { get; }
        IRepository<Like> LikeRepository { get; }


        ApplicationUserManager UserManager { get; }
        ApplicationRoleManager RoleManager { get; }


        void Commit();
    }
}
