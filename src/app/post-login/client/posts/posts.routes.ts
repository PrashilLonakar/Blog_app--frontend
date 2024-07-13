import { Routes } from '@angular/router';

export const POSTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/list.component').then((m) => m.ListComponent),
    data: {
      title: 'Post List',
      breadcrumbs: [{ label: 'Post List', path: '/post', isClickable: false }],
    },
  },
  // {
  //   path: 'add',
  //   loadComponent: () =>
  //     import('./add-edit/add-edit.component').then((m) => m.AddEditComponent),
  //   data: {
  //     title: 'Add User',
  //     isBtnData: false,
  //     breadcrumbs: [
  //       { label: 'Admin', path: 'admin', isClickable: false },
  //       { label: 'User List', path: '/admin/user', isClickable: true },
  //       {
  //         label: 'Add User',
  //         path: '/admin/user/add',
  //         isClickable: true,
  //       },
  //     ],
  //   },
  // },
  // {
  //   path: 'edit/:id',
  //   loadComponent: () =>
  //     import('./add-edit/add-edit.component').then((m) => m.AddEditComponent),
  //   data: {
  //     title: 'Update User',
  //     isBtnData: false,
  //     breadcrumbs: [
  //       { label: 'Admin', path: 'admin', isClickable: false },
  //       { label: 'User List', path: '/admin/user', isClickable: true },
  //       {
  //         label: 'update User',
  //         path: '/admin/user/edit/:id',
  //         isClickable: false,
  //       },
  //     ],
  //   },
  // },
];
