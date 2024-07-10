import { Routes } from '@angular/router';
import { PostLoginComponent } from './post-login.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';

export const POST_ROUTES: Routes = [
  {
    path: '',
    component: PostLoginComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./client/client.component').then((m) => m.ClientComponent),
      },
      {
        path: 'admin',
        loadComponent: () =>
          import('./admin/admin.component').then((m) => m.AdminComponent),
      },
    ],
  },
];
