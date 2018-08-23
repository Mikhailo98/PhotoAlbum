import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { UserPlain } from '../models/profile';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { error } from 'util';
import { Observable, Subject } from '../../../node_modules/rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from '../../../node_modules/rxjs/operators';
import { UpdateUser } from '../models/update-user';
import { Location } from '../../../node_modules/@angular/common';
import { stringify } from '../../../node_modules/@angular/core/src/render3/util';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {




  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  username: string;
  user: UpdateUser;
  fileToUpload: File = null;
  user$: Observable<boolean>;
  private searchTerms = new Subject<string>();



  GetProfileData() {
    this.username = this.route.snapshot.paramMap.get('UserName');
    this.userService.GetUserProfileInfoToUpdate(this.username).subscribe(data => {
      this.user = data;
      
    }, (err: HttpErrorResponse) => {

    });
  }


  ngOnInit(): void {

    this.GetProfileData();


    this.user$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.userService.checkUserExists(term)),


    )
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }


  Save() {

    this.userService.UpdateUserProfile(this.user).subscribe((data) => {
      alert(JSON.stringify(data));
      const username = this.user.Username;
      localStorage.setItem('profileUrl', this.user.Username);
      this.router.navigate([`../${username}`]);
    },
      (err: HttpErrorResponse) => 
      {
        alert(JSON.stringify(err.error));}
    )}


  SaveAvatar() {
    const formData: any = new FormData();
    formData.append('avatar', this.fileToUpload, this.fileToUpload.name);

    this.userService.UpdateAvatar(this.user.Id, formData).subscribe((data) => {
      alert(JSON.stringify(data));

    }, (err: HttpErrorResponse) => {
      alert(JSON.stringify(err))
    }
    );

  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

}
