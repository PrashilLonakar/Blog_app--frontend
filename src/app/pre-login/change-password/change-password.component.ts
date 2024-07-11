import { Component, signal, Signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidationMessageComponent } from '../../core/validation/validation-message/validation-message.component';
import { ValidationHelper } from '../../core/helper/validation.helper';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-change-password',
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
    ValidationMessageComponent,
    CommonModule,
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss',
})
export class ChangePasswordComponent {
  isViewPasswordEnabled = signal<Boolean>(false);
  isViewConfirmPasswordEnabled = signal<Boolean>(false);
  changePasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.changePasswordForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.setUpchangePasswordForm();
  }

  setUpchangePasswordForm(): void {
    this.changePasswordForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
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

  public get areSamePassword() {
    if (
      !this.changePasswordForm.get('password')?.value ||
      !this.changePasswordForm.get('confirmPassword')?.value
    ) {
      return true;
    }
    if (
      this.changePasswordForm.get('password')?.touched &&
      this.changePasswordForm.get('confirmPassword')?.touched
    ) {
      return (
        this.changePasswordForm.get('password')?.value ==
        this.changePasswordForm.get('confirmPassword')?.value
      );
    }

    return true;
  }

  onSubmit() {
    if (!this.areSamePassword) {
      return;
    }
    console.log('val', this.changePasswordForm.value);
  }
}
