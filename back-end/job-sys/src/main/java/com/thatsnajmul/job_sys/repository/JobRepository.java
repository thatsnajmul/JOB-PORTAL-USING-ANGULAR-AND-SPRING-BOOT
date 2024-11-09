package com.thatsnajmul.job_sys.repository;

import com.thatsnajmul.job_sys.entity.Job;
import com.thatsnajmul.job_sys.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {
    Page<Job> findByTitleContainingIgnoreCaseOrCompanyNameContainingIgnoreCase(String title, String companyName, Pageable pageable);

    List<Job>  findByUser(User user);

    @Query("select j from Job j where j.user.id=:id")
    List<Job>  findByUserID(long id);


//    @Query("select r from Job r where r.roles.id=:id")
//    List<Job>  findByUserID(long id);


//    List<Job> jobs = jobRepository.findByUserIdEmailAndRole(userId, userEmail, userRole);
//
//    @Query("SELECT j FROM Job j WHERE j.user.id = :id AND j.user.email = :email AND j.user.role = :role")
//    List<Job> findByUserIdEmailAndRole(@Param("id") long id, @Param("email") String email, @Param("role") String role);

}

