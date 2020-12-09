import { Injectable } from '@angular/core';
import { Docente, Empleado, Estudiante } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private personalInfo: Empleado | Estudiante | Docente;

  constructor() {}

  public setPersonalInfo(data: Empleado | Estudiante | Docente): void{
    this.personalInfo = data;
  }

  public isAuthenticated(): boolean{
    return this.personalInfo != null;
  }
}
