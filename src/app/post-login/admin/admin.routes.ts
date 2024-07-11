import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'post',
        loadChildren: () =>
          import('./post/post.routes').then((m) => m.POST_ROUTES),
      },
    ],
  },
];
