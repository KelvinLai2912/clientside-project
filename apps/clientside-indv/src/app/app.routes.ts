import { Route } from '@angular/router';
import { AboutComponent,  } from 'libs/angular-app/features/src/lib/about/about.component';
import { UserDetailComponent } from 'libs/angular-app/features/src/lib/user/user-detail/user-detail.component';
import { UserListComponent } from 'libs/angular-app/features/src/lib/user/user-list/user-list.component';


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
          path: ':id',
          pathMatch: 'full',
          component: UserDetailComponent,
        },
];
