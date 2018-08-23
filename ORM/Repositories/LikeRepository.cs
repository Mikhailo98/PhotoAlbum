using PhotoAlbumCore.Entities;
using PhotoAlbumCore.Interfaces;

namespace ORM.Repositories
{
    public class LikeRepository : EFRepository<Like>, ILikeRepository
    {
        public LikeRepository(PhotoAlbumContext context) : base(context)
        {


        }
    }
}