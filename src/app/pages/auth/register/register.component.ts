import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { UserToken } from 'src/app/@core/models/user';
import { AuthService } from 'src/app/@core/service/auth.service';
import { OwnValidations } from 'src/app/@core/util/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup = this.fb.group({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    birthDate: new FormControl('', [
      Validators.required,
      OwnValidations.legalAge,
    ]),
    phone: new FormControl('', [Validators.required]),
    role: new FormControl('user'),
  });

  getErrorMessage(field: string) {
    let error = this.registerForm.get(field);
    let message;

    if (error.errors['required']) {
      message = 'El campo es requerido';
    }
    if (error.hasError('minlength')) {
      message = 'Debe colocar un minimo de 6 caracteres';
    }
    if (error.hasError('email')) {
      message = 'El email es invalido';
    }

    if (error.hasError('isLegalAge')) {
      message = 'Debe ser Mayor de edad para registrarte';
    }

    return message;
  }

  isValidField(field: string) {
    const error = this.registerForm.get(field);
    return (error.touched || error.dirty) && error.invalid;
  }

  onSubmit() {
    this.authService
      .register(this.registerForm.value)
      .pipe(
        tap((e: UserToken) => {
          this.authService.addTokenStorage(e.access_token);

          this.router.navigateByUrl('/home');
        })
      )
      .subscribe();
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
}
