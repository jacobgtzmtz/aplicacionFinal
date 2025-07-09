import { Component, OnInit, inject } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../interfaces/iusuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-nuevo-usuario-page',
    imports: [MatDivider, MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        ReactiveFormsModule],
    templateUrl: './nuevo-usuario-page.component.html',
    styles: ``
})
export class NuevoUsuarioPageComponent implements OnInit{

  usuarioForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
  }
  )

  constructor(private usuariosService: UsuariosService, private activatedRoute: ActivatedRoute, private router:Router) {

  }

  ngOnInit(): void {
    if(!this.router.url.includes('editar')) {
      return;
    }

    this.activatedRoute.params.subscribe(params => {
      this.usuariosService.obtnerusuarioPorId(params['id']).subscribe(usuario => {
        if (!usuario){
          this.router.navigateByUrl('/');
        }

        this.usuarioForm.reset(usuario);
      }) ;
    })


  }

  get UsuarioActual(): Usuario {
    const usuario = this.usuarioForm.value as Usuario
    return usuario;
  }


  OnSubmit(): void {

    if (this.usuarioForm.invalid) {
      return;
    }

    if (this.UsuarioActual.id) {
      this.usuariosService.editarUsuario(this.UsuarioActual).subscribe(usuario => {
        // this.usuarioForm = usuario
      })
      return;
    }
    
    this.usuariosService.agregarUsuario(this.UsuarioActual).subscribe(usuario => {
    this.router.navigateByUrl("/usuarios");
    });

   /*  console.log(
      {
        formIsValid: this.usuarioForm.valid,
        value: this.usuarioForm.value
      }
    ); */
  }

  /**
   * eliminarUsuario
   */
  public eliminarUsuario() {
    let id: string = this.UsuarioActual.id ? this.UsuarioActual.id : '';
    this.usuariosService.eliminarUsuarioPorId(id).subscribe(res => {
      this.router.navigateByUrl("/usuarios");
    })
  }

}
