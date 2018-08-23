import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListImagesComponent } from './list-images/list-images.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageService } from './services/image.service';
import { HttpModule } from '@angular/http';
import { TagSearchComponent } from './tag-search/tag-search.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TagImagesListComponent } from './tag-images-list/tag-images-list.component';
import { LogoutComponent } from './logout/logout.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ListImagesComponent,
    TagSearchComponent,
    RegisterComponent,
    LoginComponent,
    UploadImageComponent,
    UserProfileComponent,
    TagImagesListComponent,
    LogoutComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
