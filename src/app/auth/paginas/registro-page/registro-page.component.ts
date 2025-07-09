import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-registro-page',
    imports: [RouterLink, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
    templateUrl: './registro-page.component.html',
    styles: ``
})
export class RegistroPageComponent {

}
