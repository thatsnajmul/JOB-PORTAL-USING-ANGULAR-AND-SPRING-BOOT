import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { JobApplication } from "../../model/job-application.model"; // Make sure to update the model path

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {

  private apiUrl = 'http://localhost:8080/api/job-applications'; // Update to match your API endpoint

  constructor(private http: HttpClient) {}

  // Get all job applications with pagination
  getJobApplications(page: number, size: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}&size=${size}`);
  }

  // Get a specific job application by ID
  getJobApplicationById(id: number): Observable<JobApplication> {
    return this.http.get<JobApplication>(`${this.apiUrl}/${id}`);
  }

  // Get job applications by email
  getJobApplicationByEmail(email: string): Observable<JobApplication[]> {
    const params = new HttpParams().set('email', email);
    return this.http.get<JobApplication[]>(`${this.apiUrl}/application`, { params });
  }

  // Create a new job application
  createJobApplication(jobApplication: JobApplication): Observable<JobApplication> {
    return this.http.post<JobApplication>(this.apiUrl, jobApplication);
  }

  // Update an existing job application
  updateJobApplication(id: number, jobApplication: JobApplication): Observable<JobApplication> {
    return this.http.put<JobApplication>(`${this.apiUrl}/${id}`, jobApplication);
  }

  // Delete a job application by ID
  deleteJobApplication(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Search job applications by keyword
  searchJobApplications(query: string): Observable<JobApplication[]> {
    return this.http.get<JobApplication[]>(`${this.apiUrl}/get/search?keyword=${query}`);
  }

}

