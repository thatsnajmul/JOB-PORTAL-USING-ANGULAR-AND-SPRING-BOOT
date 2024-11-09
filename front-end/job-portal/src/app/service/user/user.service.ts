import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../../model/user.model'; // Create this interface for user data
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users';  // URL of your Spring Boot API

  constructor(private http: HttpClient) {}

  // Save user (POST request)
  saveUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  // Get user by ID (GET request)
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  // Get all users (GET request)
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  
  
  
}
