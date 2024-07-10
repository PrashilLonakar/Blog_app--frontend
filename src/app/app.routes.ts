import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./pre-login/routes').then((mod) => mod.AUTH_ROUTES),
  },
  { path: '**', redirectTo: 'auth', pathMatch: 'full' },
];
