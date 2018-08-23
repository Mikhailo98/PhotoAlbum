using PhotoAlbumCore.Entities;
using System.Data.Entity.ModelConfiguration;

namespace ORM.Configuration
{
    internal class LikeConfiguration : EntityTypeConfiguration<Like>
    {
        public LikeConfiguration()
        {
            this.HasKey(p => p.Id);

            this.Property(u => u.UserId)
                .IsRequired();
        }
    }
}