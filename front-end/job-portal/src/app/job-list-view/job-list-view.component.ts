import { Component, OnInit } from '@angular/core';
import { JobService } from '../service/job/job.service';
import { Job } from '../model/job.model';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-list-view',
  templateUrl: './job-list-view.component.html',
  styleUrl: './job-list-view.component.css'
})
export class JobListViewComponent implements OnInit{

  jobs: Job[] = [];
  currentPage = 0;
  pageSize = 10;
  totalPages: number=0;



  constructor(
    private jobService: JobService,
    private http: HttpClient,
  

  ) {

    this.searchSubject.pipe(
      debounceTime(300), // wait 300ms after the last event before emitting last event
      distinctUntilChanged() // only emit if value is different from the last
    ).subscribe((query) => {
      this.jobService.searchJobs(query).subscribe((results) => {
        this.searchResults = results;
      });
    });
  }

  ngOnInit(): void {
    this.loadJobs();
    
  }

  loadJobs(): void {
    this.jobService.getJobs(this.currentPage, this.pageSize).subscribe(data => {
      this.jobs = data.content;
      this.totalPages = data.totalPages;
    });
  }





  searchResults: Job[] = [];
  private searchSubject = new Subject<string>();
  searchJobs(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      const inputValue = inputElement.value;
      this.searchSubject.next(inputValue); // Emit the input value
    }
  }



}
