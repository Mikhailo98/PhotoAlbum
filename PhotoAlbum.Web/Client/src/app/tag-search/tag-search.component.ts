import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { TagService } from '../services/tag.service';
import { TagPlain } from '../models/tag';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { Router } from '../../../node_modules/@angular/router';
import { ListImagesComponent } from '../list-images/list-images.component';

@Component({
  selector: 'app-tag-search',
  templateUrl: './tag-search.component.html',
  styleUrls: ['./tag-search.component.css']
})
export class TagSearchComponent implements OnInit {
  tags$: Observable<TagPlain[]>;
  private searchTerms = new Subject<string>();

  constructor(private tagService: TagService,
    private router: Router,
    private imageComponent: ListImagesComponent
  ) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
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
}
