import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginDTO, LoginFormTemplate} from './login.model';
import {UserService} from './user.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public formBuilder = inject(FormBuilder);

  router = inject(Router);
  userService = inject(UserService);

  errorAuthentication = '';

  username = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required]
  });

  password = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required]
  });

  public loginForm = this.formBuilder
    .nonNullable.group<LoginFormTemplate>({
      username: this.username,
      password: this.password
    });

  login() {
    let loginPartialValue = this.loginForm.value;

    const loginDTO: LoginDTO = {
      username: loginPartialValue.username!,
      password: loginPartialValue.password!
    }

    this.userService.login(loginDTO)
      .subscribe({
        next: jwtTokenDTO => {
          console.log(jwtTokenDTO);
          this.router.navigate(['']);
        },
        error: (err: HttpErrorResponse) => {
          if(err.status === 401) {
            this.errorAuthentication = 'Invalid username or password'
          }
        }
      });
  }
}
