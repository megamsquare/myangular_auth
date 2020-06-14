import { Component, OnInit } from '@angular/core';
import { ValidationErrors, ValidatorFn, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  userSignUp = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', Validators.compose([
      Validators.required,
      this.passwordValidator(/\d/, {hasNumber: true}),
      this.passwordValidator(/[A-Z]/, {hasCapitalCase: true}),
      this.passwordValidator(/[a-z]/, {hasSmallCase: true}),
      // this.passwordValidator(/[!@#$%^*&]/, {hasSpecialCharacter: true}),
      Validators.minLength(7)
    ])],
    confirmPassword: ['', Validators.required]
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
    const confirmPassword: string = control.get('confirmPassword').value;

    if (password !== confirmPassword) {
      control.get('confirmPassword').setErrors({noPasswordMatch: true});
    }
  }

  onSubmit() {}

  get userEmail() {
    return this.userSignUp.controls.email;
  }

  get userPassword() {
    return this.userSignUp.controls.password;
  }

  get userConfirmPassword() {
    return this.userSignUp.controls.confirmPassword;
  }

}
