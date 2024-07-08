import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { ValidationHelper } from '../../helper/validation.helper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'validation-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './validation-message.component.html',
  styleUrl: './validation-message.component.scss',
})
export class ValidationMessageComponent implements OnInit {
  private isActive: boolean;

  @Input() public control?: AbstractControl;
  @Input() public message?: string;
  @Input() public propertyLabel?: string;
  @Input() public isSelectTypeControl: boolean = false;
  @Input() public showShortMessage: boolean = true;

  constructor() {
    this.isActive = true;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.isActive = false;
  }

  public get errorMessage(): string | null {
    if (this.message && this.control && this.control.errors) {
      return this.message;
    } else if (this.control && this.control.errors) {
      for (let propertyKey in this.control.errors) {
        if (
          this.control.errors.hasOwnProperty(propertyKey) &&
          this.control.touched
        ) {
          var errMsg = ValidationHelper.getValidatorErrorMessage(
            propertyKey,
            this.propertyLabel,
            this.isSelectTypeControl,
            this.showShortMessage,
            this.control.errors[propertyKey]
          );
          return errMsg;
        }
      }
    }

    return null;
  }
}
