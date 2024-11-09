import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';
import { Role } from '../model/role.model';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  
  user: any;  // This will hold the current user
  Role = Role;  // Importing Role for easy template access

  isAdmin = false;
  isEmployer = false;
  isJobSeeker = false;

  userRole: string | null = null;

  currentSection: string = '';  // Track which section to display

  loadContent(section: string) {
    this.currentSection = section;
  }


  constructor( public authService: AuthService, private router:Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    
  ) {}

  logout(): void {
    this.authService.logout(); // Call the logout method from AuthService
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.authService.userRole$.subscribe(role => {
      this.isAdmin = role === 'ADMIN';
      this.isEmployer = role === 'EMPLOYER';
      this.isJobSeeker = role === 'JOB_SEEKER';
      this.user = this.authService.getCurrentUser();
    });
  }

}
