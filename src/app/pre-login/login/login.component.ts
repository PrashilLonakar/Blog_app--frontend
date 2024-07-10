import { Component, signal, Signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  isViewPasswordEnabled = signal<Boolean>(false);
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.setUpLoginForm();
  }

  setUpLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }
  toggleViewPassword() {
    if (this.isViewPasswordEnabled()) {
      this.isViewPasswordEnabled.set(false);
    } else {
      this.isViewPasswordEnabled.set(true);
    }
  }

  onSubmit() {
    console.log('val', this.loginForm.value);
  }
}
