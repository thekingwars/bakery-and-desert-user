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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  getErrorMessage(field: string) {
    let error = this.loginForm.get(field);
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

    return message;
  }

  onSubmit() {
    this.authService
      .login(this.loginForm.value)
      .pipe(
        tap((e: UserToken) => {
          this.authService.addTokenStorage(e.access_token);

          this.router.navigateByUrl('/home');
        })
      )
      .subscribe();
  }

  isValidField(field: string) {
    const error = this.loginForm.get(field);
    return (error.touched || error.dirty) && error.invalid;
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
}
