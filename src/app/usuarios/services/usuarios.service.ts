import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Usuario } from '../interfaces/iusuario';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private URL: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.URL + "/usuarios");
  }

  obtnerusuarioPorId(id: string): Observable<Usuario | undefined> {
    return this.http.get<Usuario>(this.URL + "/usuarios/" + id)
    .pipe(
      catchError(error => of(undefined))
    )
  }

  agregarUsuario(usuario: Usuario): Observable<Usuario> {
    delete usuario.id;
    return this.http.post<Usuario>(this.URL + '/usuarios', usuario)
  }

  editarUsuario(usuario: Usuario): Observable<Usuario> {
    if(!usuario.id){
      throw Error('EL Id del usuario es requerido');
    }
    return this.http.patch<Usuario>(this.URL + '/usuarios/', usuario);
  }

  eliminarUsuarioPorId(id: string): Observable<boolean> {
    return this.http.delete(this.URL + '/usuarios/' + id)
    .pipe(
      catchError( error => of(false)),
      map(resp => true)
    );
  }


}
