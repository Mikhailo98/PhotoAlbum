import { Component, NgModule, OnInit, ElementRef, Injectable } from '@angular/core';
import { ImageService } from '../services/image.service';
import { PagingParameter } from '../models/parameters';
import { Post, ImagePlain, ImagePost } from '../models/post';
import { TagSearchComponent } from '../tag-search/tag-search.component';
import { UserPlain } from '../models/profile';
import { Router } from '../../../node_modules/@angular/router';
import { TagService } from '../services/tag.service';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css'],
})

export class ListImagesComponent {


  page = 1;
  images: ImagePost[] = [];
  isLoading = false;
  page_parameters: PagingParameter;
  Post: Post;

  constructor(
    private service: ImageService,
    private router: Router,
    private tagService: TagService,
  ) {

    this.onLoadClick();
  }

  onUserClick(userId: string, Username: string) {
    this.router.navigate([`/${Username}`]);
  }

  onLoadClick() {
    this.service.getImages(this.page).subscribe(data => {
      if (!(data.Images == null || data.Images.length == 0)) {
        this.page++;
        this.Post = data;
        this.images.push(...data.Images);
        this.page_parameters = data.PageParameters;
      }
    });

  }

  onLikeClick(el: ImagePlain, imageId: number) {
    if (imageId == undefined) {
      console.log('undefined id');
    }

    else {
      this.service.LikeImage(imageId).subscribe(data => {

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
}
