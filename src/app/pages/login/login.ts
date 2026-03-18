import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
})
export class Login {
  email: string = "";
  password: string = "";
  errorMessage: string = "";

  private auth = inject(AuthService);

  onSubmit(): void {
    const isUser = this.auth.login(this.email, this.password);

    if(isUser) {
      this.errorMessage = "";

      // navigate to dashboard
      this.auth.navigateByUrl("/dashboard");

    }
    else {
      // display error message on login fail
      this.errorMessage = "Invalid email or password. Please try again.";
    }
  }
}
