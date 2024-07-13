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
  selector: 'app-forgot-password',
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
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {
  isViewPasswordEnabled = signal<Boolean>(false);
  isViewConfirmPasswordEnabled = signal<Boolean>(false);
  forgetPasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.forgetPasswordForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.setUpforgetPasswordForm();
  }

  setUpforgetPasswordForm(): void {
    this.forgetPasswordForm = this.formBuilder.group({
      email: '',
      password: '',
      confirmPassword: '',
    });
  }
  toggleViewPassword() {
    if (this.isViewPasswordEnabled()) {
      this.isViewPasswordEnabled.set(false);
    } else {
      this.isViewPasswordEnabled.set(true);
    }
  }

  toggleViewConfirmPassword() {
    if (this.isViewConfirmPasswordEnabled()) {
      this.isViewConfirmPasswordEnabled.set(false);
    } else {
      this.isViewConfirmPasswordEnabled.set(true);
    }
  }

  onSubmit() {
    console.log('val', this.forgetPasswordForm.value);
  }
}
