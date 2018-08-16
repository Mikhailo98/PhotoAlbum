using ORM.Configuration;
using ORM;
using PhotoAlbumCore.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity.EntityFramework;

namespace ORM
{
    public class PhotoAlbumContext : IdentityDbContext<ApplicationUser>
    {

        static PhotoAlbumContext()
        {
            Database.SetInitializer<PhotoAlbumContext>(new PhotoAlbumDBInitializer());
        }


        public PhotoAlbumContext(string connection) : base(connection)
        {
            Database.Log = (s => System.Diagnostics.Debug.WriteLine(s));
        }


        public virtual DbSet<Image> Images { get; set; }
        public virtual DbSet<Like> Likes { get; set; }
        public virtual DbSet<Tag> Tags { get; set; }
        public virtual DbSet<UserProfile> UserProfiles { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Image>()
             .HasMany(s => s.Tags)
             .WithOptional()
             .Map(m =>
             {
                 m.ToTable("ImagesTagsTable");
             });


            modelBuilder.Entity<Image>().HasRequired(p => p.User)
             .WithMany()
             .HasForeignKey(p => p.UserId);


            modelBuilder.Configurations.Add(new ImageConfiguration());
            modelBuilder.Configurations.Add(new LikeConfiguration());
            modelBuilder.Configurations.Add(new TagConfiguration());
            modelBuilder.Configurations.Add(new UserConfiguration());
            
        }
    }
}
