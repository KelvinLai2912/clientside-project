import { Route } from '@angular/router';
import { AboutComponent,  } from 'libs/angular-app/features/src/lib/about/about.component';
import { UserDetailComponent } from 'libs/angular-app/features/src/lib/user/user-detail/user-detail.component';
import { UserListComponent } from 'libs/angular-app/features/src/lib/user/user-list/user-list.component';
import { UserEditComponent } from 'libs/angular-app/features/src/lib/user/user-edit/user-edit.component';


export const appRoutes: Route[] = [
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
];
