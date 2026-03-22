import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  signUpForm = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ]),
    confirmPassword: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ]),
    isAgree: new FormControl(false, [
      Validators.requiredTrue
    ])
  }, { validators: this.passwordMatchValidator })

  showError(controlName: string, errorName: string) {
    const control = this.signUpForm.get(controlName);

    return control?.invalid && (control.dirty || control.touched) && control.hasError(errorName);
  }

  passwordMatchValidator(form: AbstractControl) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password === confirmPassword) {
      return null;
    }

    return { passwordMismatch: true };
  }

  onSubmit() {
    console.log(this.signUpForm.value)
  }
}
