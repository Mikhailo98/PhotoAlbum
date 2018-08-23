using System.Collections.Generic;

namespace PhotoAlbum.BLL.PagingModels
{
    public class UploadedImage
    {
        public byte[] Buffer { get; set; }
        public string FileName { get; set; }
        public string Description { get; set; }
        public List<string> Tags { get; set; }
        public string UserId { get; set; }
    }

}
