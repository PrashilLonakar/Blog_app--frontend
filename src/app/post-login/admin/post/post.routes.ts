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
      isBtnData: true,
      btnData: {
        label: 'Add Post',
        path: '/admin/post/add',
      },
    },
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./add-edit/add-edit.component').then((m) => m.AddEditComponent),
    data: {
      title: 'Add Post',
      isBtnData: false,
      breadcrumbs: [
        { label: 'Admin', path: 'admin', isClickable: false },
        { label: 'Post List', path: '/admin/post', isClickable: true },
        { label: 'Add Post', path: '/admin/post/add', isClickable: true },
      ],
    },
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./add-edit/add-edit.component').then((m) => m.AddEditComponent),
    data: {
      title: 'Update Post',
      isBtnData: false,
      breadcrumbs: [
        { label: 'Admin', path: 'admin', isClickable: false },
        { label: 'Post List', path: '/admin/post', isClickable: true },
        { label: 'update Post', path: '/admin/post/edit', isClickable: true },
      ],
    },
  },
];
