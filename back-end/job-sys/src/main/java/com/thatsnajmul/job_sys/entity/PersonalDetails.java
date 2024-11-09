package com.thatsnajmul.job_sys.entity;

// PersonalDetails.java
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class PersonalDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String gender;
    private String birthday;
    private String email;
    private String phone;
    private String website;
    private String address;
    private String city;
    private String country;
    private String zipCode;
    private String computerSkills;
    private String languageSkills;
    private String instituteName1;
    private String subjectName1;
    private String passingYear1;
    private String gpa1;
    private String companyName1;
    private String designation1;
    private String certificationName;
    private String certificationYear;
    private String awardName;
    private String awardYear;
    private String interestIntro;

    // Getters and setters
}
