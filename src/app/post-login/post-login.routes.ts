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
        loadChildren: () =>
          import('./client/client.routes').then((m) => m.CLIENT_ROUTES),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.routes').then((m) => m.ADMIN_ROUTES),
      },
      {
        path: 'profile-setting',
        loadComponent: () =>
          import('./common/profile-setting/profile-setting.component').then(
            (m) => m.ProfileSettingComponent
          ),
        data: {
          title: 'Profile Setting',
          isBtnData: false,
          breadcrumbs: [
            {
              label: 'Profile Setting',
              path: '/admin/profile-setting',
              isClickable: false,
            },
            {
              label: 'form',
              path: '/admin/profile-setting',
              isClickable: false,
            },
          ],
        },
      },
    ],
  },
];
