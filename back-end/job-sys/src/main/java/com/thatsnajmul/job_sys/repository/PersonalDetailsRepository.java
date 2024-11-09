package com.thatsnajmul.job_sys.repository;


// PersonalDetailsRepository.java
import com.thatsnajmul.job_sys.entity.PersonalDetails; // Update the path to match your project structure
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Repository
public interface PersonalDetailsRepository extends JpaRepository<PersonalDetails, Long> {
    Page<PersonalDetails> findByFirstNameContainingIgnoreCase(String firstName, Pageable pageable);
    Page<PersonalDetails> findByLastNameContainingIgnoreCase(String lastName, Pageable pageable);
}



