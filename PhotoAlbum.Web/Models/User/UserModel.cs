namespace PhotoAlbum.Web.Models
{
    public class UserModel
    {
        public string Id { get; set; }
        public string Username { get; set; }
        public string Description { get; set; }
        public string AvatarUrl { get; set; }
        public string Fullname { get; set; }
        public int Publications { get; set; }
    }
}