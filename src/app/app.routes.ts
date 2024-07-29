import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pre-login/routes').then((mod) => mod.AUTH_ROUTES),
  },
  {
    path: '',
    loadChildren: () =>
      import('./post-login/post-login.routes').then((mod) => mod.POST_ROUTES),
  },
  { path: '**', redirectTo: 'auth', pathMatch: 'full' },
];
