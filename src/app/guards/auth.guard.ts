import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);
  const sesion = authService.currentSesion;

  if (!sesion) {
    router.navigateByUrl("/auth");
    return false;
  }

  if (sesion.id === '1') {
    return true;
  } else {
    return false;
  }

  


};
