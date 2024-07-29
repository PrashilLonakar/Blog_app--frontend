import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'post',
        pathMatch: 'full',
      },
      {
        path: 'post',
        loadChildren: () =>
          import('./post/post.routes').then((m) => m.POST_ROUTES),
      },
      {
        path: 'category',
        loadChildren: () =>
          import('./category/category.routes').then((m) => m.CATEGORY_ROUTES),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.routes').then((m) => m.USER_ROUTES),
      },
    ],
  },
];
