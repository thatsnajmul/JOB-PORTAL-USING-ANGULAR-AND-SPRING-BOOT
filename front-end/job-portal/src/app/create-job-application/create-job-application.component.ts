import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobApplication } from '../model/job-application.model';
import { JobApplicationService } from '../service/job-application/job-application.service';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-create-job-application',
  templateUrl: './create-job-application.component.html',
  styleUrl: './create-job-application.component.css'
})
export class CreateJobApplicationComponent implements OnInit{

  jobapplicationForm!: FormGroup;
  isEditMode = false;
  jobapplicationId: number = 0;
  email!: string;

  constructor(
    private fb: FormBuilder,
    private jobApplicationService: JobApplicationService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.email = this.authService.getCurrentUserEmail() || ''; // Get the email from auth service
    this.jobapplicationForm = this.fb.group({
      applicantName: ['', Validators.required],
      applicantEmail: [this.email, [Validators.required, Validators.email]],
      applicantPhone: ['', Validators.required],
      resumeUrl: ['', Validators.required],
      experience: [0, Validators.required],
      minSalary: [0, Validators.required],
      maxSalary: [0, Validators.required],
      coverLetter: ['', Validators.required],
      jobId: ['', Validators.required]
    });
    

    this.route.params.subscribe(params => {
      this.jobapplicationId = +params['id'];
      if (this.jobapplicationId) {
        this.isEditMode = true;
        this.loadJob(this.jobapplicationId);
      }
    });
  }

  loadJob(id: number): void {
    this.jobApplicationService.getJobApplicationById(id).subscribe(jobApplication => {
      this.jobapplicationForm.patchValue(jobApplication);
    });
  }

  // fetchJobApplicationByEmail(email: string): void {
  //   this.jobApplicationService.getJobApplicationByEmail(email).subscribe(
  //     (data: JobApplication[]) => {
  //       // Handle the response (if you need to use it)
  //       console.log('Fetched job applications:', data);
  //     },
  //     (error) => {
  //       console.error('Error fetching job applications:', error);
  //     }
  //   );
  // }

  onSubmit(): void {
    if (this.jobapplicationForm.invalid) {
      return;
    }
  
    const jobApplication: JobApplication = this.jobapplicationForm.value;
  
    const submitAction = this.isEditMode 
      ? this.jobApplicationService.updateJobApplication(this.jobapplicationId, jobApplication)
      : this.jobApplicationService.createJobApplication(jobApplication);
  
    submitAction.subscribe({
      next: () => {
        this.router.navigate(['/application-list']);
      },
      error: (error) => {
        console.error('Error saving job application:', error);
        // Optionally display an error message to the user
      }
    });
  }
  

  

}
