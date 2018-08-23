using PhotoAlbum.BLL.Infrastucture;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PhotoAlbum.Web.App_Start
{
    public class DirectoryConfig
    {
        public static void Register()
        {
            PhysicalDirectory.CurrentServerLocation = HttpContext.Current.Server.MapPath("~/");
            PhysicalDirectory.ImagesStoreFolder = "photos";
            PhysicalDirectory.EnsureFolderExists();
        }

    }
}