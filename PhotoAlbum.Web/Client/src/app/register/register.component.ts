import { Component, OnInit } from '@angular/core';
import { RegisterUser } from '../models/regiter-user';
import { AuthenticationService } from '../services/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { jsonpCallbackContext } from '../../../node_modules/@angular/common/http/src/module';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};

  user$: Observable<boolean>;
  private searchTerms = new Subject<string>();

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService, 
    private router: Router
  ) { }

  ngOnInit(): void {

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

  
  formErrors = {};

  register() {

    this.authenticationService.register(this.model)
      .subscribe((data: any) => {

        alert('Registration is successful')
        this.router.navigate(['/login']);
      },
        (err: HttpErrorResponse) => {

          const modelstate = JSON.stringify(err.error.ModelState);
          
          alert(modelstate);

          for (var i = 0; i < err.error.length; i++) {
            this.formErrors = err.error[i].Message;
          }


        });

  }

}
