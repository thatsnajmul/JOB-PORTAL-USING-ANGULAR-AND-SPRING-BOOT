package com.thatsnajmul.job_sys.service;

import com.thatsnajmul.job_sys.entity.Job;
import com.thatsnajmul.job_sys.repository.JobSearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class JobSearchService {

    @Autowired
    private JobSearchRepository jobSearchRepository;

    // Search jobs by title or company name
    public List<Job> searchJobs(String keyword) {
        return jobSearchRepository.findByTitleContainingIgnoreCaseOrCompanyNameContainingIgnoreCase(keyword, keyword);
    }
}

