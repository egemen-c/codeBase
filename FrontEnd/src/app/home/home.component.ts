import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorsService } from '../services/doctors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  http: any;
  doctors: any;
  baseURL = 'http://localhost:8080/api/user/getAll';

  constructor(private doctorsService: DoctorsService) { }

  getAllData(): Observable<any> {
   return this.http.get(`${this.baseURL}/getAll`)
}

  ngOnInit(): void {
    this.doctorsService.getAllData()
    .subscribe((data: any) => {
      this.doctors=data;
    })
  }

}
