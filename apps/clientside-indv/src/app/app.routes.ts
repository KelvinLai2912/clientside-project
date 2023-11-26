import { Route } from '@angular/router';
import { AboutComponent,  } from 'libs/angular-app/features/src/lib/about/about.component';
import { UserDetailComponent } from 'libs/angular-app/features/src/lib/user/user-detail/user-detail.component';
import { UserListComponent } from 'libs/angular-app/features/src/lib/user/user-list/user-list.component';
import { UserEditComponent } from 'libs/angular-app/features/src/lib/user/user-edit/user-edit.component';
import { HomeComponent } from 'libs/angular-app/features/src/lib/home/home.component';
import { EventDetailComponent } from 'libs/angular-app/features/src/lib/event/event-detail/event-detail.component';
import { EventListComponent } from 'libs/angular-app/features/src/lib/event/event-list/event-list.component';
import { EventEditComponent } from 'libs/angular-app/features/src/lib/event/event-edit/event-edit.component';
import { AddEventToUserComponent } from 'libs/angular-app/features/src/lib/user/add-event-to-user/add-event-to-user.component';

export const appRoutes: Route[] = [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },

      {
        path: 'user-list',
        pathMatch: 'full',
        component: UserListComponent,
      },
  
      {
        path: 'about',
        pathMatch: 'full',
        component: AboutComponent,
      },

      {
        path: 'user/add',
        pathMatch: 'full',
        component: UserEditComponent
      },

      {
        path: 'user/edit/:id',
        pathMatch: 'full',
        component: UserEditComponent
      },
      
      {
        path: 'user/:id',
        pathMatch: 'full',
        component: UserDetailComponent,
      },

      {
      path: 'user/:userId/add-event',
      component: AddEventToUserComponent
      },

      {
        path: 'event-list',
        pathMatch: 'full',
        component: EventListComponent,
      },

      {
        path: 'event/add',
        pathMatch: 'full',
        component: EventEditComponent
      },

      {
        path: 'event/:id',
        pathMatch: 'full',
        component: EventDetailComponent,
      },

      {
        path: 'event/edit/:id',
        pathMatch: 'full',
        component: EventEditComponent
      },
];
