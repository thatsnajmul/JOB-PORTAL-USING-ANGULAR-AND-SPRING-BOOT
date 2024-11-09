import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AuthResponse } from '../../model/auth-response';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { Role } from '../../model/role.model';
import { User } from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080'; // Your backend API URL
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  private userRoleSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  public userRole$: Observable<string | null> = this.userRoleSubject.asObservable();

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient,
    private router: Router
  ) {
    // Initialize the role from localStorage only if it's a browser
    if (this.isBrowser()) {
      const storedRole = localStorage.getItem('userRole');
      this.userRoleSubject.next(storedRole);
    }
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.baseUrl}/login`, { email, password }, { headers: this.headers })
      .pipe(
        map((response: AuthResponse) => {
          if (this.isBrowser() && response.token) {
            localStorage.setItem('authToken', response.token);
            const decodedToken = this.decodeToken(response.token);
            localStorage.setItem('userRole', decodedToken.role);
            this.userRoleSubject.next(decodedToken.role); // Update role in BehaviorSubject
          }
          return response;
        })
      );
  }

  register(user: { name: string; email: string; password: string; cell: string; address: string; dob: Date; gender: string; image: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/register/job-seeker`, user, { headers: this.headers }).pipe(
      map((response: AuthResponse) => {
        if (this.isBrowser() && response.token) {
          localStorage.setItem('authToken', response.token); // Store JWT token
        }
        return response;
      })
    );
  }

  getToken(): string | null {
    if (this.isBrowser()) {
      return localStorage.getItem('authToken');
    }
    return null;
  }

  decodeToken(token: string): any {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }

  getUserRole(): string | null {
    if (this.isBrowser()) {
      return localStorage.getItem('userRole');
    }
    return null;
  }

  

  getUserByEmail(email: string): Observable<User> {
    const token = this.getToken(); // Retrieve the token
    const headers = this.headers.append('Authorization', `Bearer ${token}`); // Add Authorization header
    return this.http.get<User>(`${this.baseUrl}/api/users/email/${email}`, { headers });
}


  isAdmin(): boolean {
    return this.getUserRole() === 'ADMIN';
  }

  // isAdminOrEmployer(): boolean {
  //   const role = this.getUserRole();
  //   return role === 'ADMIN' || role === 'EMPLOYEER';
  // }

  isEmployer(): boolean {
    return this.getUserRole() === 'EMPLOYER';
  }

  isJobSeeker(): boolean {
    return this.getUserRole() === 'JOB_SEEKER';
  }

  isTokenExpired(token: string): boolean {
    const decodedToken = this.decodeToken(token);
    const expiry = decodedToken.exp * 1000; // Convert expiry to milliseconds
    return Date.now() > expiry;
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (token && !this.isTokenExpired(token)) {
      return true;
    }
    this.logout(); // Automatically log out if token is expired
    return false;
  }

  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userRole');
      this.userRoleSubject.next(null); // Clear role in BehaviorSubject
    }
    this.router.navigate(['/login']);
  }

  hasRole(roles: string[]): boolean {
    const userRole = this.getUserRole();
    return userRole ? roles.includes(userRole) : false;
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  getCurrentUser(): any | null {
    const token = this.getToken();
    if (token) {
      return this.decodeToken(token); // This returns the decoded token, which contains user details
    }
    return null;
  }



  // // Simulating getting the current logged-in user (in a real app, fetch from storage or API)
  // getCurrentUser() {
  //   return { role: Role };  // Replace with actual logic for getting the user and role
  // }


  getCurrentUserEmail(): string | null {
    const token = this.getToken();
    if (token) {
      const decodedToken = this.decodeToken(token);
      return decodedToken.sub; // 'sub' is usually where the email is stored in JWT
    }
    return null;
  }

  

 



  



  

  
}
