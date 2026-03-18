import { Component, signal } from '@angular/core';
import { Table } from '../table/table';
import { Modal } from '../modal/modal';

@Component({
  selector: 'div[create-job-modal]',
  imports: [],
  templateUrl: './create-job-modal.html'
})

export class CreateJobModal{};

@Component({
  selector: 'app-jobs',
  imports: [Table, CreateJobModal, Modal],
  templateUrl: './jobs.html',
  styleUrl: './jobs.scss',
})
export class Jobs {
  isCreateJobModalOpen = signal<boolean>(false);

  openCreateJobModal() {
    this.isCreateJobModalOpen.set(true);
  }

  jobs=[
    {
      "id": 1,
      "title": "Frontend Developer",
      "department": "Engineering",
      "location": "Remote",
      "status": "Open",
      "candidateCount": 12
    },
    {
      "id": 2,
      "title": "Backend Developer",
      "department": "Engineering",
      "location": "Bangalore",
      "status": "Open",
      "candidateCount": 8
    },
    {
      "id": 3,
      "title": "UI/UX Designer",
      "department": "Design",
      "location": "Delhi",
      "status": "Closed",
      "candidateCount": 5
    },
    {
      "id": 4,
      "title": "HR Executive",
      "department": "Human Resources",
      "location": "Mumbai",
      "status": "Open",
      "candidateCount": 3
    }
  ];
}
