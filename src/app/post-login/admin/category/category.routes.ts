import { Routes } from '@angular/router';

export const CATEGORY_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/list.component').then((m) => m.ListComponent),
    data: {
      title: 'Category List',
      breadcrumbs: [
        { label: 'Admin', path: 'admin', isClickable: false },
        { label: 'Category List', path: '/admin/category', isClickable: true },
      ],
      isBtnData: true,
      btnData: {
        label: 'Add Category',
        path: '/admin/category/add',
      },
    },
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./add-edit/add-edit.component').then((m) => m.AddEditComponent),
    data: {
      title: 'Add Category',
      isBtnData: false,
      breadcrumbs: [
        { label: 'Admin', path: 'admin', isClickable: false },
        { label: 'Category List', path: '/admin/category', isClickable: true },
        {
          label: 'Add Category',
          path: '/admin/category/add',
          isClickable: true,
        },
      ],
    },
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./add-edit/add-edit.component').then((m) => m.AddEditComponent),
    data: {
      title: 'Update Category',
      isBtnData: false,
      breadcrumbs: [
        { label: 'Admin', path: 'admin', isClickable: false },
        { label: 'Category List', path: '/admin/category', isClickable: true },
        {
          label: 'update Category',
          path: '/admin/category/edit/:id',
          isClickable: false,
        },
      ],
    },
  },
];
