using System;

namespace ORM.Entities
{
    public class Comment
    {

        public int Id { get; set; }
        public string Description { get; set; }
        public DateTime Created { get; set; }

        public int UserId { get; set; }
        public User User { get; set; } //who made a comment

        public int ImageId { get; set; }
        public Image Image { get; set; }
    }
}