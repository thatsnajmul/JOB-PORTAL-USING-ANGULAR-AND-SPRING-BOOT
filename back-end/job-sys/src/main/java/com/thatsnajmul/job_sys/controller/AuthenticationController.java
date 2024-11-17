package com.thatsnajmul.job_sys.controller;


import com.thatsnajmul.job_sys.entity.AuthenticationResponse;
import com.thatsnajmul.job_sys.entity.User;
import com.thatsnajmul.job_sys.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:9097/")
public class AuthenticationController {

    private final AuthService authService;

    @PostMapping("/register/job-seeker")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody User request
    ) {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/register/admin")
    public ResponseEntity<AuthenticationResponse> registerAdmin(
            @RequestBody User request
    ) {
        return ResponseEntity.ok(authService.registerAdmin(request));
    }

    @PostMapping("/register/employer")
    public ResponseEntity<AuthenticationResponse> registerEmployer(
            @RequestBody User request
    ) {
        return ResponseEntity.ok(authService.registerEmployer(request));
    }



    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
            @RequestBody User request
    ) {
        return ResponseEntity.ok(authService.authenticate(request));
    }



    @GetMapping("/activate/{id}")
    public ResponseEntity<String> activateUser(@PathVariable("id") int id) {
        String response = authService.activateUser(id);
        return ResponseEntity.ok(response);
    }


}
