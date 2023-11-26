import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserService } from './user/user.service';

import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventService } from './event/event.service';
import { EventEditComponent } from './event/event-edit/event-edit.component';
import { AddEventToUserComponent } from './user/add-event-to-user/add-event-to-user.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule, RouterLink],
  providers: [UserService, EventService],
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
    AboutComponent,
    HomeComponent,
    EventDetailComponent,
    EventListComponent,
    EventEditComponent,
    AddEventToUserComponent,
    AddEventToUserComponent,
    AddEventToUserComponent,
  ],
  exports: [UserListComponent, UserDetailComponent],
})
export class FeaturesModule {}
