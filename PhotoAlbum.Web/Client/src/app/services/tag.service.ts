import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TagPlain, TagPage } from '../models/tag';
import { Router } from '../../../node_modules/@angular/router';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class TagService {

  constructor(
    private http: HttpClient,
    private router: Router) { }


  /* GET Tags name contains search term */
  GetTagsBySubstring(substring: string): Observable<TagPlain[]> {

    if (!substring.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<TagPlain[]>(`/api/tags/${substring}/search`);
  }



  GetRecentImagesByTagId(tagId: number, page: number): Observable<TagPage> {

    const token = "Bearer " + localStorage.getItem('userToken');
    const myHeaders = new HttpHeaders().set('Authorization', token);
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.get<TagPage>(`/api/tags/${tagId}/images/recent?PageIndex=${page}`, { headers: myHeaders })

  }

}
