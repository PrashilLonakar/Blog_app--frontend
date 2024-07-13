import { Component, Output, EventEmitter } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { LocalStorageService } from '../../../core/service/local-storage.service';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Output() sideNavOpen = new EventEmitter<boolean>(true);
  sidenavStatus: boolean = true;
  profile: any;

  constructor(private localStorage: LocalStorageService) {
    this.profile = this.localStorage.getLocalItem('profile');
    this.profile = {
      firstname: 'Profile',
      role: 'admin',
    };
  }
  sidenavClick() {
    this.sidenavStatus != this.sidenavStatus;
    this.sideNavOpen.emit(this.sidenavStatus);
  }
}
