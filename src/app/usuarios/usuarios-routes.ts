import { Routes } from "@angular/router";
import { LayoutPageComponent } from "./paginas/layout-page/layout-page.component";
import { NuevoUsuarioPageComponent } from "./paginas/nuevo-usuario-page/nuevo-usuario-page.component";
import { BuscarPageComponent } from "./paginas/buscar-page/buscar-page.component";
import { UsuarioPageComponent } from "./paginas/usuario-page/usuario-page.component";
import Error404PageComponent from "../shared/paginas/error-404-page/error-404-page.component";
import { UsuariosPageComponent } from "./paginas/usuarios-page/usuarios-page.component";
import { authGuard } from "../guards/auth.guard";

export const rutasUsuarios: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            {
                path: 'buscar',
                title: 'Buscar usuario',
                component: BuscarPageComponent
            },
           {
                path: 'editar/:id',
                title: 'Nuevo usuario',
                component: NuevoUsuarioPageComponent,
                //canActivate: [authGuard]
            },
            {
                path: 'agregar',
                title: 'Agregar usuario',
                component: NuevoUsuarioPageComponent,
                canActivate: [authGuard]
                
            },
            {
                path: 'list',
                title: 'Lista de usuarios',
                component: UsuariosPageComponent
            },
             {
                path: ':id',
                title: 'Detalles de usuario',
                component: NuevoUsuarioPageComponent
            },
            {
                path: '**',
                redirectTo: 'list' 
            } 
            
        ] 
    }

]


//como no es una clase hay que exportar la constante así
export default rutasUsuarios;