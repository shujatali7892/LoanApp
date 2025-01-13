import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseModel, Application } from '../models/application.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  addNewApplication(obj: Application): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>("/api/Loan/AddNewApplication", obj);

    // return this.http.post<ApiResponseModel>("https://projectapi.gerasim.in/api/Loan/AddNewApplication", obj);
  }
  checkPANExists(pan: string) {
    return this.http.get<boolean>(`/api/Loan/CheckPANExists?pan=${pan}`);
  }
}
