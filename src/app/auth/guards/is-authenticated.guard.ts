import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces/auth-status.enum';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  /* const url = state.url;
  localStorage.setItem('path', url); */

  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  if (authService.authStatus() === AuthStatus.authenticated) {
    return true;
  }

  if (authService.authStatus() === AuthStatus.checking) {
    return false;
  }

  router.navigateByUrl('/auth');

  return false;
};
