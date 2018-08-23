import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListImagesComponent } from './list-images/list-images.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TagImagesListComponent } from './tag-images-list/tag-images-list.component';
import { LogoutComponent } from './logout/logout.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  { path: ':UserName/edit', component: EditProfileComponent, pathMatch: 'full' },
  { path: '', component: ListImagesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'upload', component: UploadImageComponent },
  { path: ':UserName', component: UserProfileComponent },
  { path: 'tag/:id', component: TagImagesListComponent },

];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {

}
