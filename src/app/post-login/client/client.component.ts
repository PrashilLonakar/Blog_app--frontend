import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../common/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-client',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MatSidenavModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
})
export class ClientComponent {
  showToggleIcon: boolean = false;
}
