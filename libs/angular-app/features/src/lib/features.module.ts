import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserService } from './user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { Route, RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule, RouterLink],
  providers: [UserService],
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
    AboutComponent,
    HomeComponent,
  ],
  exports: [UserListComponent, UserDetailComponent],
})
export class FeaturesModule {}
