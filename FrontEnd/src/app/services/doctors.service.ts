import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
interface Appointment {
  
  userId: bigint,
  phone: bigint,
  email: string,
  hospitalName: string,
  departmentName: string,
  name: string,
  surname: string,
}
@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private http: HttpClient) { }

  private baseURL = `http://localhost:3000/doctors` 


  getAllData(): Observable<Appointment> {
   return this.http.get<Appointment>(`${this.baseURL}`)}
}
