package com.thatsnajmul.job_sys.controller;

import com.thatsnajmul.job_sys.entity.Job;
import com.thatsnajmul.job_sys.entity.User;
import com.thatsnajmul.job_sys.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
public class JobController {
    @Autowired
    private JobService jobService;

    @GetMapping
    public ResponseEntity<Page<Job>> getAllJobs(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(jobService.getAllJobs(pageable));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Job> getJobById(@PathVariable Long id) {
        return ResponseEntity.ok(jobService.getJobById(id));
    }

    @PostMapping
    public ResponseEntity<Job> createJob(@RequestBody Job job) {
        return ResponseEntity.status(HttpStatus.CREATED).body(jobService.createJob(job));
    }

//    @PostMapping
//    public ResponseEntity<Job> createJob(@RequestBody Job job, @RequestParam("email") String email) {
//        // Create a job for the user associated with the provided email
//        Job createdJob = jobService.createJobByEmail(job, email);
//
//        // Return the created job wrapped in a ResponseEntity with 201 Created status
//        return ResponseEntity.status(HttpStatus.CREATED).body(createdJob);
//    }

    @PutMapping("/{id}")
    public ResponseEntity<Job> updateJob(@PathVariable Long id, @RequestBody Job jobDetails) {
        return ResponseEntity.ok(jobService.updateJob(id, jobDetails));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJob(@PathVariable Long id) {
        jobService.deleteJob(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/search")
    public ResponseEntity<Page<Job>> searchJobs(
            @RequestParam String keyword,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
            Pageable pageable = PageRequest.of(page, size);
            return ResponseEntity.ok(jobService.searchJobs(keyword, pageable));
    }

    @GetMapping("/job")
    public ResponseEntity<List<Job>> getJobByUser(@RequestParam("email") String email) {
        // Fetch the jobs associated with the user's email
        List<Job> jobs = jobService.getJobByUserEmail(email);
        // Check if the job list is empty
        if (jobs.isEmpty()) {
            return ResponseEntity.noContent().build();  // Return 204 No Content if no jobs found
        }
        // Return the list of jobs wrapped in a ResponseEntity with 200 OK status
        return ResponseEntity.ok(jobs);
    }



//    @GetMapping("/job")
//    public List<Job> getJobByUser(@RequestParam("email") String email) {
//        // Fetch the jobs associated with the user's email
//      List<Job> jobs = jobService.getJobByUserEmail(email);
//        // Return the list of jobs wrapped in a ResponseEntity
//
//        return  jobs;
//    }



//    // Suggest jobs by a partial ID or keyword
//    @GetMapping("/search")
//    public List<Job> searchJobs(@RequestParam("query") String query) {
//        return jobService.searchJobs(query);
//    }


}
