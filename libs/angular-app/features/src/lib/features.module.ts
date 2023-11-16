import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserService } from './user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { Route, RouterLink } from '@angular/router';


@NgModule({
  imports: [CommonModule, HttpClientModule, RouterLink],
  providers: [UserService],
  declarations: [UserListComponent, UserDetailComponent, AboutComponent],
  exports: [UserListComponent, UserDetailComponent],
})
export class FeaturesModule {}
