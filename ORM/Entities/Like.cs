namespace ORM.Entities
{
    public class Like
    {
        public int Id { get; set; }     

        public virtual Image Image { get; set; }
        public int ImageId { get; set; }

        public virtual User User { get; set; }
        public int UserId { get; set; }

    }
}