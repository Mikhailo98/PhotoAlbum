import { Injectable } from '@angular/core';

import { Observable, of, Observer } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from '../models/post';
import { TagPage, TagPlain } from '../models/tag';
import { Route, Router } from '../../../node_modules/@angular/router';
import { HttpResponse } from 'selenium-webdriver/http';


@Injectable({ providedIn: 'root' })
export class ImageService {
  DeleteImage(imageId: number): Observable<HttpResponse> {
  
 
    const token = localStorage.getItem('userToken'); 
    const myHeaders = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.delete<HttpResponse>(`api/images/${imageId}`, {headers: myHeaders});
  }

 
  constructor(
    private http: HttpClient,
    private router: Router) { }


  /* GET heroes whose name contains search term */
  getImages(PageIndex: number): Observable<Post> {
  
    const token = localStorage.getItem('userToken');
    const myHeaders = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.get<Post>(`/api/images/recent/?PageIndex=${PageIndex}`, { headers: myHeaders });
  }

  //Post
  LikeImage(imageId: number): Observable<number> {


    const token = localStorage.getItem('userToken');

    if (token == null || token == undefined) {
      this.router.navigate(['/login']);
    }

    const myHeaders = new HttpHeaders().set('Authorization', "Bearer " + token);
    return this.http.post<number>(`api/images/${imageId}/likes`
      , null, { headers: myHeaders });
  }


  PostFile(file: FormData): Observable<string> {

    const token = localStorage.getItem('userToken');

    if (token == null || token == undefined) {
      this.router.navigate(['/login']);
    }
    const myHeaders = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.post<string>('api/images', file, { headers: myHeaders })

  }

  PostImage(data: FormData): Observable<void> {

    let params = new HttpParams();
    let headers = new HttpHeaders();

    headers.set('Content-Type', null);
    headers.set('Accept', "multipart/form-data");
    return this.http.post<void>('api/images', data, { params, headers });
  }

}
