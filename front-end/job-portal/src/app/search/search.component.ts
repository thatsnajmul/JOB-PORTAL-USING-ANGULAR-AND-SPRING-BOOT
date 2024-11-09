import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../model/job.model';
import { JobService } from '../service/job/job.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchTerm: string = '';
  jobs: Job[] = [];

  constructor(private jobService: JobService,private router: Router) {}


  openJobDetails(jobId: number) {
    // Replace the base URL with your application's base URL
    const url = this.router.serializeUrl(this.router.createUrlTree(['/job-details', jobId]));
    window.open(url, '_blank');
}

  // Method to fetch search results based on the input
  onSearch(): void {
    if (this.searchTerm.trim()) {
      this.jobService.searchJobs(this.searchTerm).subscribe(
        (response: Job[]) => {
          this.jobs = response;
          console.log('Jobs found:', this.jobs);
        },
        (error) => {
          console.error('Error fetching jobs:', error);
        }
      );
    } else {
      this.jobs = [];
    }
  }
  
  

}
