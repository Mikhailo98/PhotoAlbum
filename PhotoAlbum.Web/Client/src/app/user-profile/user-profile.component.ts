import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ImagePost, ImagePlain } from '../models/post';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { ImageService } from '../services/image.service';
import { UserPlain } from '../models/profile';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  page = 1;
  images: ImagePost[] = [];
  userId: string;
  username: string;
  user: UserPlain;
  IsOwnProfile: boolean;

  constructor(private service: UserService,
    private imageService: ImageService,
    private route: ActivatedRoute) {

    this.username = this.route.snapshot.paramMap.get('UserName');
    this.onLoadClick();
  }

  ngOnInit() {

  }

  onLoadClick() {

    this.service.getUserProfile(this.username, this.page).subscribe(data => {
      this.images.push(...data.Images)
      this.IsOwnProfile = data.IsOwnProfile;
      this.user = data.User;
      this.page++;
    });
  }


  onLikeClick(el: ImagePlain, imageId: number) {


    if (imageId == undefined) {
      console.log('undefined id');
    }

    else {
      this.imageService.LikeImage(imageId).subscribe(data => {

        if (el.IsLiked == true) {
          el.IsLiked = false;
          el.NumberOfLikes--;
        }
        else {
          el.IsLiked = true;
          el.NumberOfLikes++;
        }
      })
    }
  }

  deleteImage(imageId:number)
  {
    this.imageService.DeleteImage(imageId).subscribe((data)=>
    {
      alert(JSON.stringify(data));

    }, (err: HttpErrorResponse)=>
    {
  
      alert(JSON.stringify(err.error));
    });
  }


}
