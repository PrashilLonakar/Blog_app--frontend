import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-pre-login',
  standalone: true,
  imports: [RouterOutlet, MatCardModule],
  templateUrl: './pre-login.component.html',
  styleUrl: './pre-login.component.scss',
})
export class PreLoginComponent {}
