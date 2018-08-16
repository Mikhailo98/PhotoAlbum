using PhotoAlbumCore.Entities;
using System.Data.Entity.ModelConfiguration;

namespace ORM.Configuration
{
    internal class ImageConfiguration : EntityTypeConfiguration<Image>
    {
        public ImageConfiguration()
        {
            this.Property(p => p.LocalPath)
                .IsRequired();

            this.Property(p => p.Created)
                .IsRequired();

        }
    }
}