import { Routes } from '@angular/router';

export const POST_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/list.component').then((m) => m.ListComponent),
    data: {
      title: 'Post List',
      breadcrumbs: [
        { label: 'Admin', path: 'admin', isClickable: false },
        { label: 'Post List', path: '/admin/post', isClickable: true },
      ],
      btnData: {
        label: 'Add Post',
        path: '/admin/post/add',
      },
    },
  },
];
