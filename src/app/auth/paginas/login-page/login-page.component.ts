import { Component, inject } from '@angular/core';

//Modulos de angular material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login-page',
    imports: [RouterLink, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
    templateUrl: './login-page.component.html',
    styles: ``
})
export class LoginPageComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  logIn(nombre: string): void{
    this.authService.login('abcd', 'abcd').subscribe(res => {
      this.router.navigateByUrl("/");
    })
  }

}
