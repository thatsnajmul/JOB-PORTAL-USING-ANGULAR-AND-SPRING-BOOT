
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';  // Adjust the path as needed
import { Role } from '../model/role.model';  // Ensure this points to your role model


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit{

  

  user: any;  // This will hold the current user
  Role = Role;  // Importing Role for easy template access

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Get the current user from the AuthService
    this.user = this.authService.getCurrentUser();
  }

  currentSection: string = '';  // Track which section to display

  loadContent(section: string) {
    this.currentSection = section;
  }








  //user: User | null = null;  // Assuming you have the user data
  // constructor() {
  //   // Simulate getting user data from backend
  //   this.user = {
  //     id: 1,
  //     username: 'JohnDoe',
  //     role: Role.JOB_SEEKER  // Example role
  //   };
  // }



}
