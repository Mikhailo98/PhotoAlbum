using PhotoAlbumCore.Entities;
using System.Data.Entity.ModelConfiguration;

namespace ORM.Configuration
{
    internal class TagConfiguration : EntityTypeConfiguration<Tag>
    {
        public TagConfiguration()
        {

            this.HasIndex(p => p.Description).IsUnique();
            this.Property(p => p.Description)
                .HasMaxLength(20);

        }
    }
}