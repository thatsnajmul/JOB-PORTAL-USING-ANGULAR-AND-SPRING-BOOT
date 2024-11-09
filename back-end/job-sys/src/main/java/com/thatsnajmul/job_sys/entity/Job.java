package com.thatsnajmul.job_sys.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String companyName;
    private String jobType;
    private String location;
    private int experience;
    private double minSalary;
    private double maxSalary;
    private String category;
    private LocalDate deadline;
    private String companyImageUrl;
    private String jobDescription;
    private String cvDownloadUrl;

    @ManyToOne
    @JoinColumn(name = "userId")
    @JsonBackReference // This is the child
    private User user;

//    @ManyToOne
//    @JoinColumn(name = "roleId")
//    @JsonBackReference // This is the child
//    private User roles;





    // Getters and Setters
}

