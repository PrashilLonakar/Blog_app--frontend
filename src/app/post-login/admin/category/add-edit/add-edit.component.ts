import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { SubHeaderComponent } from '../../../common/sub-header/sub-header.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidationMessageComponent } from '../../../../core/validation/validation-message/validation-message.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { ValidationHelper } from '../../../../core/helper/validation.helper';

@Component({
  selector: 'app-add-edit',
  standalone: true,
  imports: [
    SubHeaderComponent,
    MatInputModule,
    MatFormFieldModule,
    ValidationMessageComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatSelectModule,
  ],
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.scss',
})
export class AddEditComponent {
  pageName = '';
  breadCrumbs = [];
  buttonContent = {};
  isBthShow: boolean = false;
  categoryForm: FormGroup;
  isSubmit = signal(false);

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.categoryForm = new FormGroup({});
  }

  ngOnInit() {
    let data: any = [];

    this.setUpcategoryForm(data);
    this.route.data.subscribe((data) => {
      const title = data['title'];
      if (title) {
        this.pageName = title;
        this.titleService.setTitle(title);
      }
      if (data['breadcrumbs']) {
        this.breadCrumbs = data['breadcrumbs'];
      }
      if (data['btnData']) {
        this.buttonContent = data['btnData'];
      }
      if (data['isBtnData']) {
        this.isBthShow = data['isBtnData'];
      }
    });
  }

  setUpcategoryForm(formData: any): void {
    this.categoryForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      description: [
        formData?.description ? formData.description : '',
        [Validators.required, Validators.maxLength(2000)],
      ],
    });
  }

  onSubmit() {
    this.isSubmit.set(true);

    if (ValidationHelper.showFieldsError(this.categoryForm)) {
      this.categoryForm.markAllAsTouched();
      return;
    }

    console.log('val', this.categoryForm.value);
  }
}
