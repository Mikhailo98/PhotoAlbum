using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using PhotoAlbumCore.Entities;
using PhotoAlbumCore.Identity;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Web;

namespace ORM
{
    public class PhotoAlbumDBInitializer : CreateDatabaseIfNotExists<PhotoAlbumContext>
    {
        protected override void Seed(PhotoAlbumContext context)
        {
            
            var tag1 = new Tag() { Description = "Auto" };
            var tag2 = new Tag() { Description = "Sea" };
            var tag3 = new Tag() { Description = "Mountain" };
            var tag4 = new Tag() { Description = "Man" };
            var tag5 = new Tag() { Description = "Guy" };
            var tag6 = new Tag() { Description = "Car" };




            var userManager = new ApplicationUserManager(new UserStore<ApplicationUser>(context));
            var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));


            // making two roles
            var adminRole = new IdentityRole { Name = "admin" };
            var userRole = new IdentityRole { Name = "user" };


            roleManager.Create(adminRole);
            roleManager.Create(userRole);

            var applicationUser1 = new ApplicationUser()
            {
                UserName = "user1",
                Email = "TestUser1@Domain.tld",

            };
            var applicationUser2 = new ApplicationUser()
            {
                UserName = "user2",
                Email = "TestUser2@Domain.tld"
            };
            var applicationUser3 = new ApplicationUser()
            {
                UserName = "user3",
                Email = "TestUser3@Domain.tld"
            };

            var admin = new ApplicationUser()
            {
                UserName = "admin",
                Email = "admin@a.com"
            };


            userManager.Create(applicationUser1, "123456");
            userManager.Create(applicationUser2, "123456");
            userManager.Create(applicationUser3, "123456");



            var result = userManager.Create(admin, "123456");

            if (result.Succeeded)
            {
                userManager.AddToRole(admin.Id, adminRole.Name);

                userManager.AddToRole(applicationUser1.Id, userRole.Name);
                userManager.AddToRole(applicationUser2.Id, userRole.Name);
                userManager.AddToRole(applicationUser3.Id, userRole.Name);
            }



            var user1 = new UserProfile()
            {
                UserName = applicationUser1.UserName,
                Id = applicationUser1.Id,
                Fullname = "Firstname Surname",
            };

            var user2 = new UserProfile()
            {
                UserName = applicationUser2.UserName,
                Id = applicationUser2.Id,
                Fullname = "Firstname Surname",

            };

            var user3 = new UserProfile()
            {
                UserName = applicationUser3.UserName,
                Id = applicationUser3.Id,
                Fullname = "Firstname Surname",
            };



           string physicalServerPath =
            HttpContext.Current.Server.MapPath("~/photosx/");

           string User1Folder =
               Path.Combine(physicalServerPath, user1.Id);
           string User2Folder =
             Path.Combine(physicalServerPath, user2.Id);
           string User3Folder =
             Path.Combine(physicalServerPath, user3.Id);


           Directory.CreateDirectory(User1Folder);
           Directory.CreateDirectory(User2Folder);
           Directory.CreateDirectory(User3Folder);




            var image1 = new Image() { LocalPath = "\\phorosx\\" +  user1.Id + "\\clouds-conifers-desktop-wallpaper-707344.jpg", User = user1, Tags = { tag3 } };
            var image11 = new Image() { LocalPath = "\\phorosx\\" + user1.Id + "\\adult-alone-bike-helmet-1245618.jpg", User = user1, Tags = { tag4, tag5 }, };
            var image111 = new Image() { LocalPath = "\\phorosx\\" + user1.Id + "\\azores-daylight-guy-1247933.jpg", User = user1, Tags = { tag2, tag5 } };


            var image2 = new Image() { LocalPath = "\\phorosx\\" + user2.Id + "\\animal-avian-bird-1247512.jpg", User = user2 };
            var image22 = new Image() { LocalPath = "\\phorosx\\" + user2.Id + "\\ball-shaped-blurred-background-close-up-1098518.jpg", User = user2 };


            var image3 = new Image() { LocalPath = "\\phorosx\\" + user3.Id + "\\applause-arena-audience-761543.jpg", User = user3 };
            var image33 = new Image() { LocalPath = "\\phorosx\\" + user3.Id + "\\cold-environment-fog-776390.jpg", User = user3, Tags = { tag3 } };
            var image333 = new Image() { LocalPath = "\\phorosx\\" + user3.Id + "\\asphalt-car-classic-253096.jpg", User = user3, Tags = { tag1, tag6 } };
            var image3333 = new Image() { LocalPath = "\\phorosx\\" + user3.Id + "\\beach-horizon-island-1030903.jpg", User = user3, Tags = { tag2 } };
            var image33333 = new Image() { LocalPath = "\\phorosx\\" + user3.Id + "\\automobile-automotive-autumn-1200458.jpg", User = user3, Tags = { tag1, tag6 } };
            
            
            context.Images.AddRange(new List<Image>()
            {
                image1, image11, image111,
                image2, image22,
                image3, image33, image333, image3333, image33333
            });

            context.Tags.AddRange(new List<Tag>() { tag1, tag2, tag3, tag4, tag5, tag6 });
            context.UserProfiles.AddRange(new List<UserProfile>() { user1, user2, user3 });
            
            context.SaveChanges();

            base.InitializeDatabase(context);
        }
    }
}