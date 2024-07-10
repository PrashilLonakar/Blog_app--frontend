import { Component, Output, EventEmitter } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Output() sideNavOpen = new EventEmitter<boolean>(true);
  sidenavStatus: boolean = true;
  sidenavClick() {
    this.sidenavStatus != this.sidenavStatus;
    this.sideNavOpen.emit(this.sidenavStatus);
  }
}
