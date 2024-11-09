package com.thatsnajmul.job_sys.service;

import com.thatsnajmul.job_sys.entity.Job;
import com.thatsnajmul.job_sys.entity.User;
import com.thatsnajmul.job_sys.repository.JobApplicationRepository;
import com.thatsnajmul.job_sys.entity.JobApplication;
import com.thatsnajmul.job_sys.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobApplicationService {
    @Autowired
    private JobApplicationRepository jobApplicationRepository;

    @Autowired
    private UserRepository userRepository;

    // Retrieve all job applications with pagination
    public Page<JobApplication> getAllJobApplications(Pageable pageable) {
        return jobApplicationRepository.findAll(pageable);
    }

    // Get a specific job application by ID
    public JobApplication getJobApplicationById(Long id) {
        return jobApplicationRepository.findById(id).orElse(null);
    }

    // Create a new job application
    public JobApplication createJobApplication(JobApplication jobApplication) {
        return jobApplicationRepository.save(jobApplication);
    }

    // Update an existing job application
    public JobApplication updateJobApplication(Long id, JobApplication jobApplicationDetails) {
        JobApplication jobApplication = getJobApplicationById(id);
        if (jobApplication != null) {
            // Update applicant-specific details
            jobApplication.setApplicantName(jobApplicationDetails.getApplicantName());
            jobApplication.setApplicantEmail(jobApplicationDetails.getApplicantEmail());
            jobApplication.setApplicantPhone(jobApplicationDetails.getApplicantPhone());
            jobApplication.setResumeUrl(jobApplicationDetails.getResumeUrl());

            // Update job-related details
            jobApplication.setExperience(jobApplicationDetails.getExperience());
            jobApplication.setMinSalary(jobApplicationDetails.getMinSalary());
            jobApplication.setMaxSalary(jobApplicationDetails.getMaxSalary());
            jobApplication.setCoverLetter(jobApplicationDetails.getCoverLetter());

            // Update Job ID
            jobApplication.setJobId(jobApplicationDetails.getJobId());

            return jobApplicationRepository.save(jobApplication);
        }
        return null;
    }

    // Delete a job application by ID
    public void deleteJobApplication(Long id) {
        jobApplicationRepository.deleteById(id);
    }

    public Page<JobApplication> searchJobApplications(Integer experience, String jobId, Pageable pageable) {
        if (experience != null && jobId != null) {
            return jobApplicationRepository.findByExperience(experience, pageable);
        } else if (jobId != null) {
            return jobApplicationRepository.findByJobIdContainingIgnoreCase(jobId, pageable);
        }
        return jobApplicationRepository.findAll(pageable); // Return all if no criteria
    }

//    public List<JobApplication> getJobApplicationByUserEmail(String email) {
//        User user = userRepository.findByEmail(email)
//                .orElseThrow(() -> new RuntimeException("User Not Found"));
//        return jobApplicationRepository.findByUserID(user.getId());
//    }
}

