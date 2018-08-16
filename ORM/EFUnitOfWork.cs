using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using ORM.Repositories;
using PhotoAlbumCore.Entities;
using PhotoAlbumCore.Identity;
using PhotoAlbumCore.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ORM
{
    public class EFUnitOfWork : IUnitOfWork
    {
        private ImageRepository imageRepositrory;
        private TagRepository tagRepositrory;
        private UserRepository userRepositrory;
        private LikeRepository likeRepositrory;



        private ApplicationUserManager userManager;
        private ApplicationRoleManager roleManager;

        private readonly PhotoAlbumContext context;

        public EFUnitOfWork(PhotoAlbumContext context)
        {
            this.context = context;

        }


        #region RepositoryProperties
        IRepository<Like> IUnitOfWork.LikeRepository
        {
            get
            {
                if (this.likeRepositrory == null)
                    this.likeRepositrory = new LikeRepository(context);
                return likeRepositrory;
            }
        }

        public virtual IRepository<Image> ImageRepository
        {
            get
            {
                if (this.imageRepositrory == null)
                    this.imageRepositrory = new ImageRepository(context);
                return imageRepositrory;
            }
        }



        public virtual IRepository<Tag> TagRepository
        {
            get
            {
                if (this.tagRepositrory == null)
                    this.tagRepositrory = new TagRepository(context);
                return tagRepositrory;
            }
        }

        public IRepository<UserProfile> UserRepository
        {
            get
            {
                if (this.userRepositrory == null)
                    this.userRepositrory = new UserRepository(context);
                return userRepositrory;
            }
        }

        public void Commit()
        {

            context.SaveChanges();
        }
        #endregion

        #region IdentityConfig
        public ApplicationUserManager UserManager
        {
            get
            {
                if (userManager == null)
                {
                    userManager = new ApplicationUserManager
                        (new UserStore<ApplicationUser>(context));
                    // Configure validation logic for usernames
                    userManager.UserValidator =
                        new UserValidator<ApplicationUser>(userManager)
                        {
                            AllowOnlyAlphanumericUserNames = false,
                            RequireUniqueEmail = true
                        };
                    // Configure validation logic for passwords
                    userManager.PasswordValidator = new PasswordValidator
                    {
                        RequiredLength = 6,
                        RequireNonLetterOrDigit = false,
                        RequireDigit = false,
                        RequireLowercase = false,
                        RequireUppercase = false,
                    };
                }
                return userManager;
            }
        }

        public ApplicationRoleManager RoleManager
        {
            get
            {
                if (roleManager == null)
                    roleManager = new ApplicationRoleManager
                        (new RoleStore<ApplicationRole>(context));
                return roleManager;
            }
        }


        #endregion

        #region Dispose
        private bool disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
                this.disposed = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        #endregion

    }
}
