package com.thatsnajmul.job_sys.service;

import com.thatsnajmul.job_sys.repository.PersonalDetailsRepository;
import com.thatsnajmul.job_sys.entity.PersonalDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class PersonalDetailsService {

    @Autowired
    private PersonalDetailsRepository personalDetailsRepository;

    // Retrieve all personal details with pagination
    public Page<PersonalDetails> getAllPersonalDetails(Pageable pageable) {
        return personalDetailsRepository.findAll(pageable);
    }

    // Get a specific personal details record by ID
    public PersonalDetails getPersonalDetailsById(Long id) {
        return personalDetailsRepository.findById(id).orElse(null);
    }

    // Create a new personal details record
    public PersonalDetails createPersonalDetails(PersonalDetails personalDetails) {
        return personalDetailsRepository.save(personalDetails);
    }

    // Update an existing personal details record
    public PersonalDetails updatePersonalDetails(Long id, PersonalDetails personalDetailsDetails) {
        PersonalDetails personalDetails = getPersonalDetailsById(id);
        if (personalDetails != null) {
            // Update personal details fields
            personalDetails.setFirstName(personalDetailsDetails.getFirstName());
            personalDetails.setLastName(personalDetailsDetails.getLastName());
            personalDetails.setGender(personalDetailsDetails.getGender());
            personalDetails.setBirthday(personalDetailsDetails.getBirthday());

            // Update contact details
            personalDetails.setEmail(personalDetailsDetails.getEmail());
            personalDetails.setPhone(personalDetailsDetails.getPhone());
            personalDetails.setWebsite(personalDetailsDetails.getWebsite());

            // Update address details
            personalDetails.setAddress(personalDetailsDetails.getAddress());
            personalDetails.setCity(personalDetailsDetails.getCity());
            personalDetails.setCountry(personalDetailsDetails.getCountry());
            personalDetails.setZipCode(personalDetailsDetails.getZipCode());

            // Update skills
            personalDetails.setComputerSkills(personalDetailsDetails.getComputerSkills());
            personalDetails.setLanguageSkills(personalDetailsDetails.getLanguageSkills());

            // Update educational details
            personalDetails.setInstituteName1(personalDetailsDetails.getInstituteName1());
            personalDetails.setSubjectName1(personalDetailsDetails.getSubjectName1());
            personalDetails.setPassingYear1(personalDetailsDetails.getPassingYear1());
            personalDetails.setGpa1(personalDetailsDetails.getGpa1());

            // Update work experience
            personalDetails.setCompanyName1(personalDetailsDetails.getCompanyName1());
            personalDetails.setDesignation1(personalDetailsDetails.getDesignation1());

            // Update certification details
            personalDetails.setCertificationName(personalDetailsDetails.getCertificationName());
            personalDetails.setCertificationYear(personalDetailsDetails.getCertificationYear());

            // Update award details
            personalDetails.setAwardName(personalDetailsDetails.getAwardName());
            personalDetails.setAwardYear(personalDetailsDetails.getAwardYear());

            // Update interest introduction
            personalDetails.setInterestIntro(personalDetailsDetails.getInterestIntro());

            return personalDetailsRepository.save(personalDetails);
        }
        return null;
    }

    // Delete a personal details record by ID
    public void deletePersonalDetails(Long id) {
        personalDetailsRepository.deleteById(id);
    }

    // Search personal details by first name or last name with pagination
    public Page<PersonalDetails> searchPersonalDetails(String firstName, String lastName, Pageable pageable) {
        if (firstName != null && lastName != null) {
            return personalDetailsRepository.findByFirstNameContainingIgnoreCase(firstName, pageable);
        } else if (lastName != null) {
            return personalDetailsRepository.findByLastNameContainingIgnoreCase(lastName, pageable);
        }
        return personalDetailsRepository.findAll(pageable); // Return all if no criteria
    }
}

