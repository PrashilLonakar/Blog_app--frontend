import {
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

export class ValidationHelper {
  public static emailValidator(control: FormControl) {
    if (control.value) {
      // RFC 2822 compliant regex
      if (
        control.value.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        )
      ) {
        return null;
      } else {
        return { invalidEmailAddress: true };
      }
    } else return null;
  }

  public static getValidatorErrorMessage(
    validatorName: string,
    propertyLabel: string | undefined,
    isSelectTypeControl: boolean,
    showShortMessage: boolean,
    validatorValue?: any
  ): string {
    let validationMessage = isSelectTypeControl ? 'Select' : 'Enter';
    validationMessage = !showShortMessage
      ? `Please ${validationMessage.toLowerCase()}`
      : validationMessage;
    let config: { [key: string]: string } = {
      required: `${propertyLabel} is mandatory`,
      pattern: `${propertyLabel} is invalid.`,
      invalidEmailAddress: `${propertyLabel} is invalid`,
      invalidAlphabet: `${propertyLabel} must contain only alphabets`,
      min: `${propertyLabel} should be greater than or equal to ${
        validatorValue.min ?? 'current time'
      }`,
      liveDateMin: `${propertyLabel} should be at least 1 hour in future`,
      max: `${propertyLabel} should be less than or equal to ${validatorValue.max}`,
      minlength: `${propertyLabel} should have minimum ${validatorValue.requiredLength} characters`,
      maxlength: `${propertyLabel} can have maximum ${validatorValue.requiredLength} characters`,
      invalidPhoneNumber: `${propertyLabel} is invalid`,
      invalidUrl: `${propertyLabel} is invalid`,
      invalidPositiveNumber: `${propertyLabel} should be greater than 0`,
      invalidConfirmPassword: 'Confirm password should be same as password',
      invalidNumberFormat: `${propertyLabel} can only have digits`,
      startDateInvalid: `${propertyLabel} should be greater than current date.`,
      endDateInvalid: `${propertyLabel} should be greater than current date and start date.`,
    };
    return config[validatorName];
  }
}
