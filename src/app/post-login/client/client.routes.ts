import { Routes } from '@angular/router';
import { ClientComponent } from './client.component';

export const CLIENT_ROUTES: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'post',
        loadChildren: () =>
          import('./posts/posts.routes').then((m) => m.POSTS_ROUTES),
      },
    ],
  },
];
