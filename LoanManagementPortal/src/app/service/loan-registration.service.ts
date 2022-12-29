import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoanRegistration } from '../model/loan-registration';

@Injectable({
  providedIn: 'root'
})
export class LoanRegistrationService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8100';
  
  sendLoanRegistration(loanRegistration: LoanRegistration) {
    return this.http.post<LoanRegistration>(`${this.baseUrl}/apply`, loanRegistration);
  }

  getAll() {
    return this.http.get<LoanRegistration[]>(`${this.baseUrl}/all-registration`);
  }
}