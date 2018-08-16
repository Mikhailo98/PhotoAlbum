using PhotoAlbumCore.Entities;
using PhotoAlbumCore.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ORM.Repositories
{
    public class LikeRepository : EFRepository<Like>, ILikeRepository
    {
        public LikeRepository(PhotoAlbumContext context) : base(context)
        {


        }
    }
}