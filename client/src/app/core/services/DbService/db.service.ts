import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Company } from '../../models/company';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) { }
  baseUrl: string = environment.apiUrl + 'auth/';

  register(company: Company) {
    return this.http.post(this.baseUrl + 'create', company);
  }
}
