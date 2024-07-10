import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-post-login',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    MatSidenavModule,
    MatButtonModule,
    // BrowserModule,
    // BrowserAnimationsModule,
  ],
  templateUrl: './post-login.component.html',
  styleUrl: './post-login.component.scss',
})
export class PostLoginComponent {
  events: string[] = [];
  opened: boolean = true;
  //mode: { value: MatDrawerMode } = { value: 'side' };
}
