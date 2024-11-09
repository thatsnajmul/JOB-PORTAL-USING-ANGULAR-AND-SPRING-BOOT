import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../service/job/job.service';
import { Job } from '../model/job.model';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.css'
})
export class JobFormComponent implements OnInit{

  jobForm!: FormGroup;
  isEditMode = false;
  jobId: number =0;
  

  constructor(
    private fb: FormBuilder,
    private jobService: JobService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      companyName: ['', Validators.required],
      jobType: ['', Validators.required],
      location: ['', Validators.required],
      experience: ['', Validators.required],
      minSalary: ['', Validators.required],
      maxSalary: ['', Validators.required],
      category: ['', Validators.required],
      deadline: ['', Validators.required],
      companyImageUrl: ['', Validators.required],
      jobDescription: ['', Validators.required],
      cvDownloadUrl: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      this.jobId = +params['id'];
      if (this.jobId) {
        this.isEditMode = true;
        this.loadJob(this.jobId);
      }
    });
  }

  loadJob(id: number): void {
    this.jobService.getJobById(id).subscribe(job => {
      this.jobForm.patchValue(job);
    });
  }

  onSubmit(): void {
    if (this.jobForm.invalid) {
      this.jobForm.markAllAsTouched();  // Highlight invalid fields
      return;
    }
  
    const job: Job = this.jobForm.value;
  
    if (this.isEditMode) {
      this.jobService.updateJob(this.jobId, job).subscribe(() => {
        this.router.navigate(['/jobs']);
      });
    } else {
      this.jobService.createJob(job).subscribe(() => {
        this.router.navigate(['/jobs']);
      });
    }
    
  }

}
