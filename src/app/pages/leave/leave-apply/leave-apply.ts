import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth/auth-service';

@Component({
  selector: 'section[leave-apply]',
  imports: [ReactiveFormsModule],
  templateUrl: './leave-apply.html',
  styleUrl: './leave-apply.scss',
})
export class LeaveApply {
  private formBuilder = inject(FormBuilder);

  constructor(private http: HttpClient, private auth: AuthService) {}

  leaveForm = this.formBuilder.group({
    leaveType: ['', [Validators.required]],
    from: ['', [Validators.required]],
    to: ['', [Validators.required]],
    reason: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]]
  })

  leaveEndMinDate = "";

  handleFromChange(val: string) {
    this.leaveEndMinDate = val;

    if ((this.leaveForm?.value?.to ?? "") < val) {
      this.leaveForm.patchValue({
        to: ""
      })
    }

  }

  showError(controlName: string, errorName: string) {
    const control = this.leaveForm.get(controlName);

    return control?.invalid && (control.dirty || control.touched) && control.hasError(errorName);
  }

  onSubmit() {

    console.log(this.auth.currentUser?.id)
    console.log(this.auth.currentUser?.managerId)

    this.http.post("http://localhost:8000/api/leave/apply", {
        empId: this.auth.currentUser?.id,
        managerId: this.auth.currentUser?.managerId,
        ...this.leaveForm.value
    }).subscribe(res => {
      console.log(res);

    })
  }
}
