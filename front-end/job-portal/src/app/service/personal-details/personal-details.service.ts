import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonalDetails } from '../../model/personal-details-model';

@Injectable({
  providedIn: 'root'
})
export class PersonalDetailsService {

    private apiUrl = 'http://localhost:8080/api/personal-details'; // Update to match your API endpoint

    constructor(private http: HttpClient) {}
  
    // Get all personal details with pagination
    getPersonalDetails(page: number, size: number): Observable<any> {
      return this.http.get(`${this.apiUrl}?page=${page}&size=${size}`);
    }
  
    // Get a specific personal detail by ID
    getPersonalDetailById(id: number): Observable<PersonalDetails> {
      return this.http.get<PersonalDetails>(`${this.apiUrl}/${id}`);
    }
  
    // Create a new personal detail entry
    createPersonalDetail(personalDetail: PersonalDetails): Observable<PersonalDetails> {
      return this.http.post<PersonalDetails>(this.apiUrl, personalDetail);
    }
  
    // Update an existing personal detail entry
    updatePersonalDetail(id: number, personalDetail: PersonalDetails): Observable<PersonalDetails> {
      return this.http.put<PersonalDetails>(`${this.apiUrl}/${id}`, personalDetail);
    }
  
    // Delete a personal detail entry by ID
    deletePersonalDetail(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
  
    // Search personal details by keyword
    searchPersonalDetails(query: string): Observable<PersonalDetails[]> {
      return this.http.get<PersonalDetails[]>(`${this.apiUrl}/search?query=${query}`);
    }

    
}
