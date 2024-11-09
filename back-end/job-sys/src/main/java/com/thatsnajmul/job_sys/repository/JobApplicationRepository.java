package com.thatsnajmul.job_sys.repository;

import com.thatsnajmul.job_sys.entity.Job;
import com.thatsnajmul.job_sys.entity.JobApplication;
import com.thatsnajmul.job_sys.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

@Repository
public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {
    Page<JobApplication> findByExperience(Integer experience, Pageable pageable);
    Page<JobApplication> findByJobIdContainingIgnoreCase(String jobId, Pageable pageable);

//    List<JobApplication> findByUser(User user);
//
//    @Query("select ja from JobApplication ja where ja.user.id=:id")
//    List<JobApplication>  findByUserID(long id);
}

