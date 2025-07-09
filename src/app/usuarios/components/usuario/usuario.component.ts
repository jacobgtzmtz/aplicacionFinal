import { Component, Input } from '@angular/core';
import { Usuario } from '../../interfaces/iusuario';
import {MatCardModule} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-usuario',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatIcon],
    templateUrl: './usuario.component.html',
    styles: ``
})
export class UsuarioComponent {

  @Input()
  usuario!: Usuario;
}
