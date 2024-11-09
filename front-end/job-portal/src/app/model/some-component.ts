import { AuthService } from "../service/auth/auth.service";


export class SomeComponent {
    constructor(private authService: AuthService) {}
  
    get isAdmin(): boolean {
      return this.authService.isAdmin();
    }
  
    get isJobSeeker(): boolean {
      return this.authService.isJobSeeker();
    }
  
    get isEmployer(): boolean {
      return this.authService.isEmployer();
    }
  }