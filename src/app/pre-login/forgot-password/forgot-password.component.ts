import { Component, signal, Signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidationHelper } from '../../core/helper/validation.helper';
import { ValidationMessageComponent } from '../../core/validation/validation-message/validation-message.component';

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
    ValidationMessageComponent,
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
      email: ['', [Validators.required, ValidationHelper.emailValidator]],
    });
  }

  onSubmit() {
    console.log('val', this.forgetPasswordForm.value);
  }
}
