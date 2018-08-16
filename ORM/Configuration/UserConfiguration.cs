using PhotoAlbumCore.Entities;
using System.Data.Entity.ModelConfiguration;

namespace ORM.Configuration
{
    internal class UserConfiguration : EntityTypeConfiguration<UserProfile>
    {
        public UserConfiguration()
        {
            this.Property(p => p.UserName)
                .IsRequired()
                .HasMaxLength(50);

            this.HasIndex(p => p.UserName)
                .IsUnique();
            

            this.Property(p => p.Description)
                .IsOptional()
                .HasMaxLength(250);

            this.Property(p => p.AvatarUrl)
                .IsOptional();


        }
    }
}