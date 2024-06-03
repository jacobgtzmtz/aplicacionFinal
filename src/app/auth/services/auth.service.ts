import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { ISesion } from '../interfaces/isesion';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL:string = environment.baseUrl;
  private sesion?: ISesion;

  constructor(private http: HttpClient) { }

  get currentSesion(): ISesion | undefined {
    if( !this.sesion) {
      return undefined;
    }

    return structuredClone( this.sesion);
  }

  login(nombre: string, email: string): Observable<ISesion> {
    return this.http.get<ISesion>(this.baseURL + "/sesiones/1")
    .pipe(
      tap(sesion => {
        this.sesion = sesion;
        localStorage.setItem('token', sesion.id);
      })
    );
  }

  logOut() {
    this.sesion = undefined;
    localStorage.clear();
  }


}
