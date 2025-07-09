import { Component, OnInit, inject } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../interfaces/iusuario';
import { MatDividerModule } from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import { UsuarioComponent } from '../../components/usuario/usuario.component';

@Component({
    selector: 'app-usuarios-page',
    standalone: true,
    imports: [MatDividerModule, MatGridListModule, UsuarioComponent],
    templateUrl: './usuarios-page.component.html',
    styles: ``
})
export class UsuariosPageComponent implements OnInit {

  private usuariosService = inject(UsuariosService);

  public usuarios!: Usuario[];

ngOnInit() {
this.obtenerUsuarios();
}

/**
 * obtenerUsuarios
 : void*/
public obtenerUsuarios(): void {
  this.usuariosService.obtenerUsuarios().subscribe(usuarios => {

    this.usuarios = usuarios;
    console.log(this.usuarios);
  })

}


}
