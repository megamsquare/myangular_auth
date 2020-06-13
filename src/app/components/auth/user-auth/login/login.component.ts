import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { AuthApiService } from 'src/app/shared/services/api/auth_api/auth-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private authApi: AuthApiService
  ) { }

  userLogin = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', Validators.compose([
      Validators.required,
      this.passwordValidator(/\d/, {hasNumber: true}),
      this.passwordValidator(/[A-Z]/, {hasCapitalCase: true}),
      this.passwordValidator(/[a-z]/, {hasSmallCase: true}),
      // this.passwordValidator(/[!@#$%^*&]/, {hasSpecialCharacter: true}),
      Validators.minLength(7)
    ])]
  });

  ngOnInit(): void {
  }

  passwordValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {

    return (control: AbstractControl): { [key: string]: any} => {

      if (!control.value) {
        return null;
      }

      const valid = regex.test(control.value);


      return valid ? null : error;

    };
  }

  onSubmit() {
    const login = this.userLogin.value;
    console.log(login);
    this.authApi.Userlogin(login).subscribe(
      data => {
        console.log(data);
      },
      errors => {
        console.error(errors);
      }
    );
  }

  get userEmail() {
    return this.userLogin.controls.email;
  }

  get userPassword() {
    return this.userLogin.controls.password;
  }

}
