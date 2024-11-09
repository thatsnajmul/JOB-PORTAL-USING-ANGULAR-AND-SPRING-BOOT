package com.thatsnajmul.job_sys.controller;

import com.thatsnajmul.job_sys.entity.Job;
import com.thatsnajmul.job_sys.service.JobSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs/get")
public class JobSearchController {

    @Autowired
    private JobSearchService jobSearchService;

    @GetMapping("/search")
    public List<Job> searchJobs(@RequestParam String keyword) {
        return jobSearchService.searchJobs(keyword);
    }
}



