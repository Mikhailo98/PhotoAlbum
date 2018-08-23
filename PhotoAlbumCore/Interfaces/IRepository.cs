using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace PhotoAlbumCore.Interfaces
{
    public interface IRepository<TEntity> where TEntity : class
    {
        TEntity Find(object id);
        TEntity Add(TEntity entity);
        void Update(TEntity entity);
        void Delete(TEntity entity);
        IEnumerable<TEntity> ListAll();
        void AddRange(IEnumerable<TEntity> entities);

    }
}
