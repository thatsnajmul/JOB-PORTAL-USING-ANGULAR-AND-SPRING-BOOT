import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { User } from '../model/user.model';
import { Role } from '../model/role.model';
import { UserService } from '../service/user/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Fetch all users when the component loads
    this.userService.getAllUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }

 
  

  

}
