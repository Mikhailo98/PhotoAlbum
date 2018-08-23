import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ImageService } from '../services/image.service';
import { switchMap, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { TagService } from '../services/tag.service';
import { TagPlain } from '../models/tag';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { NullInjector } from '@angular/core/src/di/injector';
@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {


  desctription: string = "" ;
  fileToUpload2: File = null;

  tags$: Observable<TagPlain[]>;
  private searchTerms = new Subject<string>();





  constructor(private imageService: ImageService,
    private tagService: TagService,
    private router: Router, 
    private location: Location  ) {
    const token = localStorage.getItem('userToken');

    if (token == null || token == undefined) {
      this.router.navigate(['/login']);
    }

  }

  ngOnInit(): void {
    this.tags$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.tagService.GetTagsBySubstring(term)),
    );
  }


  search(term: string): void {
    this.searchTerms.next(term);
  }

  upload() {

    const formData: any = new FormData();
    formData.append('File', this.fileToUpload2, this.fileToUpload2.name);
    // formData.append('Tags', this.ChosenTags);
    formData.append('Description', this.desctription);

    this.ChosenTags.forEach(element => {
      formData.append('Tags', element);
    });

    this.imageService.PostFile(formData).subscribe((data) => {
      alert(data);
      this.location.back();
    }, (err: HttpErrorResponse) => {
      alert(err);
    });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload2 = files.item(0);
  }

  uploadFileToActivity() {
    const formData: any = new FormData();
    formData.append('fileKey', this.fileToUpload2, this.fileToUpload2.name);
    this.imageService.PostImage(formData).subscribe(() =>
    {
    });
  }


  ChosenTags: string[] = [];
  onSelectTag(incometag: string) {
    if (incometag.trim()) {
      if (!(this.ChosenTags.indexOf(incometag) > -1))
        this.ChosenTags.push(incometag);
    }
    else {
      alert("Choose a tag");
    }

  }

  onSelect(incomeTag: string) {
    this.ChosenTags.push(incomeTag);
  }


  deleteFromChosenArray(tag: string) {
    const index: number = this.ChosenTags.indexOf(tag);
    this.ChosenTags.slice(index , 1);
  }

}
