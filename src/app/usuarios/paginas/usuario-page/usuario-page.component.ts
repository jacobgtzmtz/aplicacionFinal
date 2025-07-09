import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../interfaces/iusuario';
import { ActivatedRoute, Router } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { delay } from 'rxjs';

import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-usuario-page',
    imports: [MatProgressSpinnerModule, MatCardModule, MatButtonModule],
    templateUrl: './usuario-page.component.html',
    styles: ``
})


export class UsuarioPageComponent  implements OnInit{

  public usuario!: Usuario | undefined;

  constructor(private usuariosService: UsuariosService, private activadedRoute: ActivatedRoute, private router: Router){

  }

  ngOnInit() {
  this.activadedRoute.params.subscribe(params => {
    this.obtnerUsuarioPorId(params["id"]);
  })
}

/**
   * obtnerUsuarioPorId
   */
obtnerUsuarioPorId(id: string) {
  this.usuariosService.obtnerusuarioPorId(id)
  //agregar este delay para ver opcional el spinner
  //.pipe(delay(1000))
  .subscribe(usuario => {
    if(!usuario){
      this.router.navigate(['/usuarios/list']);
    } else {
      this.usuario = usuario;
      console.log(usuario)
    }
    
  })
}

/**
 * goBack
 */
public goBack() {
  this.router.navigateByUrl('usuarios/list');
}

}
