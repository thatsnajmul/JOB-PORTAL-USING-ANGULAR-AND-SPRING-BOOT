package com.thatsnajmul.job_sys.controller;

import com.thatsnajmul.job_sys.entity.Job;
import com.thatsnajmul.job_sys.entity.JobApplication;
import com.thatsnajmul.job_sys.service.JobApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/job-applications")
public class JobApplicationController {
    @Autowired
    private JobApplicationService jobApplicationService;

    @GetMapping
    public ResponseEntity<Page<JobApplication>> getAllJobApplications(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(jobApplicationService.getAllJobApplications(pageable));
    }

    @GetMapping("/{id}")
    public ResponseEntity<JobApplication> getJobApplicationById(@PathVariable Long id) {
        return ResponseEntity.ok(jobApplicationService.getJobApplicationById(id));
    }

    @PostMapping
    public ResponseEntity<JobApplication> createJobApplication(@RequestBody JobApplication jobApplication) {
        return ResponseEntity.status(HttpStatus.CREATED).body(jobApplicationService.createJobApplication(jobApplication));
    }

    @PutMapping("/{id}")
    public ResponseEntity<JobApplication> updateJobApplication(@PathVariable Long id, @RequestBody JobApplication jobApplicationDetails) {
        return ResponseEntity.ok(jobApplicationService.updateJobApplication(id, jobApplicationDetails));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJobApplication(@PathVariable Long id) {
        jobApplicationService.deleteJobApplication(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/search")
    public ResponseEntity<Page<JobApplication>> searchJobApplications(
            @RequestParam(required = false) Integer experience,
            @RequestParam(required = false) String jobId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(jobApplicationService.searchJobApplications(experience, jobId, pageable));
    }

//    @GetMapping("/application")
//    public ResponseEntity<List<JobApplication>> getJobByUser(@RequestParam("email") String email) {
//        // Fetch the jobs associated with the user's email
//        List<JobApplication> jobApplications = jobApplicationService.getJobApplicationByUserEmail(email);
//        // Check if the job list is empty
//        if (jobApplications.isEmpty()) {
//            return ResponseEntity.noContent().build();  // Return 204 No Content if no jobs found
//        }
//        // Return the list of jobs wrapped in a ResponseEntity with 200 OK status
//        return ResponseEntity.ok(jobApplications);
//    }


}
