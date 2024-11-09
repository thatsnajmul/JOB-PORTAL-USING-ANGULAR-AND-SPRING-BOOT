package com.thatsnajmul.job_sys.service;

import com.thatsnajmul.job_sys.entity.User;
import com.thatsnajmul.job_sys.repository.JobRepository;
import com.thatsnajmul.job_sys.entity.Job;
import com.thatsnajmul.job_sys.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {
    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private UserRepository userRepository;

    public Page<Job> getAllJobs(Pageable pageable) {
        return jobRepository.findAll(pageable);
    }

    public Job getJobById(Long id) {
        return jobRepository.findById(id).orElse(null);
    }

    public Job createJob(Job job) {
        return jobRepository.save(job);
    }

//    public Job createJobByEmail(Job job, String email) {
//        // Find the user by email
//        User user = userRepository.findByEmail(email)
//                .orElseThrow(() -> new RuntimeException("User Not Found"));
//
//        // Associate the job with the found user
//        job.setUser(user);  // Assuming Job entity has a User field
//
//        // Save the job
//        return jobRepository.save(job);
//    }

    public Job updateJob(Long id, Job jobDetails) {
        Job job = getJobById(id);
        if (job != null) {
            job.setTitle(jobDetails.getTitle());
            job.setCompanyName(jobDetails.getCompanyName());
            job.setJobType(jobDetails.getJobType());
            job.setLocation(jobDetails.getLocation());
            job.setExperience(jobDetails.getExperience());
            job.setMinSalary(jobDetails.getMinSalary());
            job.setMaxSalary(jobDetails.getMaxSalary());
            job.setCategory(jobDetails.getCategory());
            job.setDeadline(jobDetails.getDeadline());
            job.setCompanyImageUrl(jobDetails.getCompanyImageUrl());
            job.setJobDescription(jobDetails.getJobDescription());
            job.setCvDownloadUrl(jobDetails.getCvDownloadUrl());
            return jobRepository.save(job);
        }
        return null;
    }

    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }

    public Page<Job> searchJobs(String keyword, Pageable pageable) {
        return jobRepository.findByTitleContainingIgnoreCaseOrCompanyNameContainingIgnoreCase(keyword, keyword, pageable);
    }


    public List<Job> getJobByUserEmail(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User Not Found"));
        return jobRepository.findByUserID(user.getId());
    }








    // Search jobs by title or company name
}
