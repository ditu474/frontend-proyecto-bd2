import { Injectable } from '@angular/core';
import { Login } from '../model/login.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  rutaApi = 'http://localhost:3000/api/user/login';
  
  login: Login = new Login();
  constructor(private http: HttpClient) {}

  ingresar(): Observable<Login[]>{
    return this.http.get<Login[]>(this.rutaApi);
  }
}
