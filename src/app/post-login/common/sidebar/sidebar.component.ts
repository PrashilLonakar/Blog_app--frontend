import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SidebarConstants } from '../../../core/constants/sidebar.constant';
@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [
    NavbarComponent,
    MatSidenavModule,
    MatButtonModule,
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  events: string[] = [];
  opened: boolean = true;
  sideBarMenu: any[] = [];

  constructor() {
    this.sideBarMenu = SidebarConstants.menusForAdmin;
  }
}
