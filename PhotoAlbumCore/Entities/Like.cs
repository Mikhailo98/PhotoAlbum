namespace PhotoAlbumCore.Entities
{
    public class Like
    {
        public int Id { get; set; }

        public virtual Image Image { get; set; }
        public int ImageId { get; set; }

        public virtual UserProfile User { get; set; }
        public string UserId { get; set; }

    }
}