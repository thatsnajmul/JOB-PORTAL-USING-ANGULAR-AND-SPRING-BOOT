import { Component, OnInit } from '@angular/core';
import { JobService } from '../service/job/job.service';
import { Job } from '../model/job.model';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit{

  job: Job | null = null;
  jobId!: number;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService
  ) {}

  ngOnInit(): void {
    // Get job ID from route
    this.jobId = +this.route.snapshot.paramMap.get('id')!;

    // Load job details using the job ID
    this.loadJob(this.jobId);
  }

  loadJob(id: number): void {
    this.jobService.getJobById(id).subscribe(job => {
      this.job = job;
    });
  }

}
