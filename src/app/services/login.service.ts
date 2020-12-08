import { Injectable } from '@angular/core';
import { Login, Empleado, Docente, Estudiante } from '../model';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  rutaApi = 'http://35.243.221.231/api';

  constructor(private http: HttpClient) {}

  ingresar(login: Login): Observable<Empleado | Estudiante | Docente> {
    return this.http.get(this.rutaApi + `/user/login?email=${login.email}&typeOfUser=${login.typeOfUser}`)
    .pipe(
        map((res: any) => {
          switch (login.typeOfUser){
            case ('estudiante'):
              return new Estudiante(
                res.data.dni,
                res.data.nombres,
                res.data.apellido1,
                res.data.apellido2,
                res.data.plan,
                res.data.ult_sem_matri,
                res.data.email,
                res.data.programa);
            case ('docente'):
              return new Docente(
                res.data.nro_documento,
                res.data.tipo_doc,
                res.data.nombre_completo,
                res.data.email,
                res.data.tipo,
                res.data.programa,
                res.data.facultad
              );
            case ('empleado'):
              return new Empleado(
                res.data.nro_doc,
                res.data.nombre,
                res.data.area_facultad,
                res.data.cargo,
                res.data.email,
                res.data.facultad
              );
            default:
              throwError('No se reconoce el tipo de usuario');
              break;
          }
        })
    );
  }
}
