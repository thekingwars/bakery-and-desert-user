import { AbstractControl, ValidationErrors } from '@angular/forms';

export class OwnValidations {
  static legalAge(control: AbstractControl): ValidationErrors | null {
    const age = control.value;

    const convertAge = new Date(age);

    const timeDiff = Math.abs(Date.now() - convertAge.getTime());

    const showAge = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);

    if (isNaN(showAge) || showAge < 18) {
      return { isLegalAge: true };
    }

    return null;
  }
}
