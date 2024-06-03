import { Routes } from "@angular/router";
import { LayoutPageComponent } from "./paginas/layout-page/layout-page.component";
import { LoginPageComponent } from "./paginas/login-page/login-page.component";
import { RegistroPageComponent } from "./paginas/registro-page/registro-page.component";

export const rutasAuth: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            {
                path: 'login',
                component: LoginPageComponent
            },
            {
                path: 'registro',
                component: RegistroPageComponent
            },
            {
                path: '**',
                redirectTo: 'login'
            }
        ]
    }

]