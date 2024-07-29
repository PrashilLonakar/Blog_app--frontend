import { Routes } from '@angular/router';

export const POSTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/list.component').then((m) => m.ListComponent),
    data: {
      title: 'Posts',
      breadcrumbs: [
        { label: 'Dashboard', path: '/dashboard', isClickable: false },
        { label: 'Posts', path: '/post', isClickable: false },
      ],
    },
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('./detail/detail.component').then((m) => m.DetailComponent),
    data: {
      title: 'Post-detail',
      breadcrumbs: [
        { label: 'Dashboard', path: '/dashboard', isClickable: false },
        { label: 'Posts', path: '/posts', isClickable: true },
        { label: 'detail', path: '/detail', isClickable: false },
      ],
    },
  },
];
