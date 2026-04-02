import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Table } from '../../../components/table/table';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth/auth-service';
import { ApiResponse } from '../../../interfaces/api';

@Component({
  selector: 'section[leave-requests]',
  imports: [FormsModule, Table],
  templateUrl: './leave-requests.html',
  styleUrl: './leave-requests.scss',
})
export class LeaveRequests implements OnInit {

  private http = inject(HttpClient);
  private auth = inject(AuthService);
  leaveRequests = signal([]);
  role = this.auth.currentUser?.role;

  ngOnInit(): void {
    this.http.post<ApiResponse>("http://localhost:8000/api/leave", {
      empId: this.auth.currentUser?.id,
      role: "employee"
    }).subscribe(res => this.leaveRequests.set(res.data));
  }


  // leaveRequestData = [
  //     {
  //       id: 'LR-1001',
  //       employee: { id: 'EMP001', name: 'John Doe' },
  //       type: 'Annual',
  //       startDate: '2026-03-10',
  //       endDate: '2026-03-11',
  //       days: 2,
  //       reason: 'Family event',
  //       status: 'Approved',
  //       appliedAt: '2026-03-07T09:10:00.000Z',
  //       decidedAt: '2026-03-08T06:20:00.000Z',
  //       decidedBy: 'Manager',
  //     },
  //     {
  //       id: 'LR-1002',
  //       employee: { id: 'EMP001', name: 'John Doe' },
  //       type: 'Sick',
  //       startDate: '2026-03-14',
  //       endDate: '2026-03-14',
  //       days: 1,
  //       reason: 'Fever',
  //       status: 'Pending',
  //       appliedAt: '2026-03-13T08:00:00.000Z',
  //     },
  //   ]
}
