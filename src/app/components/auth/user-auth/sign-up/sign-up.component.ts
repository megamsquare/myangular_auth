import { Component, OnInit } from '@angular/core';
import { ValidationErrors, ValidatorFn, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AuthApiService } from 'src/app/shared/services/api/auth_api/auth-api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private authApi: AuthApiService
  ) { }

  userSignUp = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required]],
    password: ['', Validators.compose([
      Validators.required,
      this.passwordValidator(/\d/, {hasNumber: true}),
      this.passwordValidator(/[A-Z]/, {hasCapitalCase: true}),
      this.passwordValidator(/[a-z]/, {hasSmallCase: true}),
      // this.passwordValidator(/[!@#$%^*&]/, {hasSpecialCharacter: true}),
      Validators.minLength(7)
    ])],
    password_confirmation: ['']
  },
  {
    validators: this.passwordMatchValidator
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

  passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('password').value;
    const confirmPassword: string = control.get('password_confirmation').value;

    if (password !== confirmPassword) {
      control.get('password_confirmation').setErrors({noPasswordMatch: true});
    }
  }

  onSubmit() {
    const signUp = this.userSignUp.value;
    console.log(signUp);
    this.authApi.userSignup(signUp).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  get userEmail() {
    return this.userSignUp.controls.email;
  }

  get userPassword() {
    return this.userSignUp.controls.password;
  }

  get userConfirmPassword() {
    return this.userSignUp.controls.password_confirmation;
  }

  get userName() {
    return this.userSignUp.controls.name;
  }

}
