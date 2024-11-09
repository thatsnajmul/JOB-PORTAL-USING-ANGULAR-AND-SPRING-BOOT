import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobApplicationService } from '../service//job-application/job-application.service';
import { JobApplication } from '../model/job-application.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-application-edit',
  templateUrl: './job-application-edit.component.html',
  styleUrl: './job-application-edit.component.css'
})
export class JobApplicationEditComponent implements OnInit{

  jobApplicationForm: FormGroup;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobApplicationService: JobApplicationService,
    private fb: FormBuilder
  ) {
    this.jobApplicationForm = this.fb.group({
      applicantName: ['', Validators.required],
      applicantEmail: ['', [Validators.required, Validators.email]],
      applicantPhone: ['', Validators.required],
      resumeUrl: ['', Validators.required],
      experience: [0, Validators.required],
      minSalary: [0, Validators.required],
      maxSalary: [0, Validators.required],
      coverLetter: ['', Validators.required],
      jobId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.jobApplicationService.getJobApplicationById(this.id).subscribe(data => {
      this.jobApplicationForm.patchValue(data);
    });
  }

  onSubmit(): void {
    if (this.jobApplicationForm.valid) {
      this.jobApplicationService.updateJobApplication(this.id, this.jobApplicationForm.value).subscribe(() => {
        this.router.navigate(['/job-applications']);
      });
    }
  }

}
