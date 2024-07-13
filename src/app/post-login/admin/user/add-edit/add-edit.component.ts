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
  userForm: FormGroup;

  imageName = signal('');
  fileSize = signal(0);
  uploadProgress = signal(0);
  imagePreview = signal('');
  @ViewChild('fileInput') fileInput: ElementRef | undefined;
  selectedFile: File | null = null;
  uploadSuccess: boolean = false;
  uploadError: boolean = false;
  isSubmit = signal(false);
  isViewPasswordEnabled = signal<Boolean>(false);

  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.userForm = new FormGroup({});
  }

  ngOnInit() {
    let data: any = [];
    this.setUpuserForm(data);
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

  setUpuserForm(formData: any): void {
    this.userForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.maxLength(100)]],
      lastname: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, ValidationHelper.emailValidator]],
      profilePic: [formData?.profilePic ? formData.profilePic : ''],
      password: [
        formData?.password ? formData.password : '',
        Validators.required,
      ],
    });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0] as File | null;
    this.uploadFile(file);
  }

  // Handler for file drop
  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    const file = event.dataTransfer?.files[0] as File | null;
    this.uploadFile(file);
  }

  // Prevent default dragover behavior
  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  // Method to handle file upload
  uploadFile(file: File | null): void {
    if (file && file.type.startsWith('image/')) {
      this.selectedFile = file;
      this.fileSize.set(Math.round(file.size / 1024)); // Set file size in KB

      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview.set(e.target?.result as string); // Set image preview URL
      };
      reader.readAsDataURL(file);

      this.uploadSuccess = true;
      this.uploadError = false;
      this.imageName.set(file.name); // Set image name
    } else {
      this.uploadSuccess = false;
      this.uploadError = true;
      this.snackBar.open('Only image files are supported!', 'Close', {
        duration: 3000,
        panelClass: 'error',
      });
    }
  }

  removeImage(): void {
    this.selectedFile = null;
    this.imageName.set('');
    this.fileSize.set(0);
    this.imagePreview.set('');
    this.uploadSuccess = false;
    this.uploadError = false;
    this.uploadProgress.set(0);
  }

  toggleViewPassword() {
    if (this.isViewPasswordEnabled()) {
      this.isViewPasswordEnabled.set(false);
    } else {
      this.isViewPasswordEnabled.set(true);
    }
  }

  onSubmit() {
    this.isSubmit.set(true);

    if (ValidationHelper.showFieldsError(this.userForm)) {
      this.userForm.markAllAsTouched();
      return;
    }

    console.log('val', this.userForm.value);
  }
}
