import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from './common/sidebar/sidebar.component';

@Component({
  selector: 'app-post-login',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    MatSidenavModule,
    MatButtonModule,
    SidebarComponent,
    // BrowserModule,
    // BrowserAnimationsModule,
  ],
  templateUrl: './post-login.component.html',
  styleUrl: './post-login.component.scss',
})
export class PostLoginComponent {
  events: string[] = [];
  opened: boolean = true;
  isAdminUrl: boolean = false;
  //mode: { value: MatDrawerMode } = { value: 'side' };

  constructor() {}
}
