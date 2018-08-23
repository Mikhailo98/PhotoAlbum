using Ninject.Modules;
using ORM;
using PhotoAlbumCore.Interfaces;

namespace PhotoAlbum.BLL.Infrastucture
{
    public class ServiceModule : NinjectModule
    {
        private string connectionString;
        public ServiceModule(string connection)
        {
            connectionString = connection;
        }
        public override void Load()
        {
            Bind<IUnitOfWork>().To<EFUnitOfWork>().WithConstructorArgument(new PhotoAlbumContext(connectionString));
        }
    }
}
