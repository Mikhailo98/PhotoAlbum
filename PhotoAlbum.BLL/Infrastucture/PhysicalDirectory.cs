using System;
using System.IO;

namespace PhotoAlbum.BLL.Infrastucture
{
    public class PhysicalDirectory
    {
        public static string CurrentServerLocation;
        public static string ImagesStoreFolder;

        public static void WriteImageOnServerPhysically(byte[] buffer, string path)
        {
          
            try
            {
                File.WriteAllBytes(path, buffer);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }


        public static void DeleleImageFromServerPhysically(string path)
        {
            try
            {
                if (File.Exists(path))
                {
                    File.Delete(path);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static void EnsureFolderExists()
        {
            var s = Path.Combine(CurrentServerLocation, ImagesStoreFolder);

            if (!Directory.Exists(Path.Combine(CurrentServerLocation, ImagesStoreFolder)))
            {
                try
                {
                    Directory.CreateDirectory(Path.Combine(CurrentServerLocation, ImagesStoreFolder));
                }
                catch (Exception)
                {

                    throw;
                }
            }

        }

    }
}
