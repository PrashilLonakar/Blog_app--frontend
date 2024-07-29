import { Component, Output, Input, EventEmitter } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterLink } from '@angular/router';
import { LocalStorageService } from '../../../core/service/local-storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Output() sideNavOpen = new EventEmitter<boolean>(true);
  @Input() isToggleIconShow: boolean = false;
  sidenavStatus: boolean = true;
  profile: any;
  isAdminUrl: boolean = false;

  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) {
    this.profile = this.localStorage.getLocalItem('profile');
    this.profile = {
      firstname: 'Profile',
      role: 'admin',
    };
    if (this.router.url.includes('admin')) {
      this.isAdminUrl = true;
    }
  }
  sidenavClick() {
    this.sidenavStatus != this.sidenavStatus;
    this.sideNavOpen.emit(this.sidenavStatus);
  }
}
