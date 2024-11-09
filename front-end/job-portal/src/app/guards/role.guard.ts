import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';  // Assuming you have an AuthService to get the current user
import { Role } from '../model/role.model';

@Injectable({
    providedIn: 'root'
  })
  export class RoleGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}
  
    canActivate(route: ActivatedRouteSnapshot): boolean {
        const user = this.authService.getCurrentUser();
        const allowedRoles: Role[] = route.data['roles'];
    
        // Check if the user's role matches any allowed roles
        if (user && allowedRoles.includes(user.role)) {
          return true;
        }
    
        // If not authorized, navigate to the "not-authorized" page
        this.router.navigate(['/not-authorized']);
        return false;
      }
  }