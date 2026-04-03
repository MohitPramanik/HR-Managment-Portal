import { Component, inject, signal } from '@angular/core';
import { Table } from '../../components/table/table';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

type Holiday = {
  name: string;
  date: string;
  day: string;
  description: string;
};

type ApiResponse = {
  data: Holiday[];
};

@Component({
  selector: 'div.app-holiday-calendar',
  imports: [Table],
  templateUrl: './holiday-calendar.html',
  styleUrl: './holiday-calendar.scss',
})

export class HolidayCalendar {

  holidays = signal<Holiday[]>([]);

  constructor(private http: HttpClient) {
    this.http.get<ApiResponse>(`${environment.apiUrl}/holiday`)
      .subscribe((val) => {
        this.holidays.set(val?.data);
      })
  }

}
