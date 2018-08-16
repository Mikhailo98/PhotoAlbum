using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ORM.Interfaces
{
    public interface IRepository<TEntity>
    {
        TEntity GetById(int id);
        TEntity GetSingleBySpec(ISpecification<TEntity> spec);
        IEnumerable<TEntity> ListAll();
        IEnumerable<TEntity> List(ISpecification<TEntity> spec);
        TEntity Add(TEntity entity);
        void Update(TEntity entity);
        void Delete(TEntity entity);
    }
}
