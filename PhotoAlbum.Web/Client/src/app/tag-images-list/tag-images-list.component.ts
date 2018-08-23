import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { ImagePost, ImagePlain } from '../models/post';
import { ImageService } from '../services/image.service';
import { TagService } from '../services/tag.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { ListImagesComponent } from '../list-images/list-images.component';
import { TagPlain } from '../models/tag';
@Component({
  selector: 'app-tag-images-list',
  templateUrl: './tag-images-list.component.html',
  styleUrls: ['./tag-images-list.component.css']
})
export class TagImagesListComponent implements OnInit {


  page = 1;
  images: ImagePost[] = [];
  FoundTag: TagPlain;
  tagId: number;

  constructor(
    private tagService: TagService,
    private imageService: ImageService,
    private route: ActivatedRoute,
    private router: Router) {


    this.tagId = +this.route.snapshot.paramMap.get('id');
  }

  onLoadClick() {
    this.tagService.GetRecentImagesByTagId(this.tagId, this.page).subscribe(data => {

      if (data != null || data != undefined) {
        this.FoundTag = data.Tag;
        this.images.push(...data.Images);
        this.page++;
      }


    }, (err: HttpErrorResponse) => {
      console.log(err.message);
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

  onUserClick(Username: string) {
    this.router.navigate([`../${Username}`]);
  }
  onTag(tagId: number) {
    this.images = [];
    this.page = 1;
    this.router.navigate([`../tag/${tagId}`]);
  }

  onImagesByTagClick(tagId: number) {
    this.tagService.GetRecentImagesByTagId(tagId, this.page).subscribe(data => {

      if (data != null || data != undefined) {
        this.FoundTag = data.Tag;
        this.images.push(...data.Images);
        this.page++;
      }


    }, (err: HttpErrorResponse) => {
      console.log(err.message);
    });
  }



  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = +params['id'];
        this.onImagesByTagClick(id);
      }
    );
  }
}
