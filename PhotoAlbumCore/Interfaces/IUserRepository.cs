using PhotoAlbumCore.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PhotoAlbumCore.Interfaces
{
    public interface IUserRepository
    {
        UserProfile GetPagedUserProfile(string userId, int pageIndex, int itemsperPage);
        UserProfile GetByUserName(string userName, int pageIndex, int itemsPerPage);
        UserProfile GetUserByUserName(string userName);
        IEnumerable<UserProfile> GetUsersByFullname(string name);
        Task<List<UserProfile>> GetUsersBySubstingAsync(string substring);


    }
}
