import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';

@Injectable({
    providedIn: 'root',
  })

  export class EmployerGuard implements CanActivate {
    constructor(
      private authService: AuthService,
      private router: Router,
      @Inject(PLATFORM_ID) private platformId: Object
    ) {}
  
  
    canActivate(): boolean {
      if (this.authService.isEmployer()) {
        return true;
      } else {
        this.router.navigate(['/employeer']);
        return false;
      }
    }
  }  