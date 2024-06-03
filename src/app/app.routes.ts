import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth-routes').then(r => r.rutasAuth)
    },
    //Si queremos que esto funcione hay que agregar el export default al archivo que se está importando
    {
        path: 'usuarios',
        loadChildren: () => import('./usuarios/usuarios-routes')
    },
    {
        path:'404',
        loadComponent: () => import('./shared/paginas/error-404-page/error-404-page.component')
    },
    {
        path:'',
        redirectTo:'usuarios',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '404'
    }

];
