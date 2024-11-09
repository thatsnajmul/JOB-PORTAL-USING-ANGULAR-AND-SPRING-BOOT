import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { JobFormComponent } from './job-form/job-form.component';
import { JobListViewComponent } from './job-list-view/job-list-view.component';
import { CompaniesComponent } from './companies/companies.component';
import { SearchComponent } from './search/search.component';
import { CurrentTimeComponent } from './current-time/current-time.component';
import { CreateJobApplicationComponent } from './create-job-application/create-job-application.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ViewAllCompaniesComponent } from './view-all-companies/view-all-companies.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { JobApplicationEditComponent } from './job-application-edit/job-application-edit.component';
import { RegisterComponent } from './register/register.component';
import { AdminGuard } from './guards/admin.guard';
import { JobSeekerGuard } from './guards/job-seeker.guard';
import { EmployerGuard } from './guards/employer.guard';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
// import { RoleGuard } from './guards/role.guard';
import { Role } from './model/role.model';
import { RoleGuard } from './guards/role.guard';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
    {
      path: 'not-authorized',
      component: NotAuthorizedComponent,
      canActivate: [RoleGuard],
      data: { roles: [Role.ADMIN,Role.EMPLOYER,Role.JOB_SEEKER] }  // Redirect unauthorized users here
    },
  //For Users
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'job-list-view', component: JobListViewComponent},
  {path:'companies', component:CompaniesComponent},
  {path:'view-all-companies', component:ViewAllCompaniesComponent},
  {path:'search', component:SearchComponent},
  {path:'current-time', component:CurrentTimeComponent},
  {path:'create-job-application', component:CreateJobApplicationComponent},

  //Guardless
  {path:'jobs', component: JobListComponent },
  {path:'job-details', component:JobDetailsComponent},

  //AllGuard
  {path:'user-profile', component:UserProfileComponent, canActivate: [RoleGuard],
    data: { roles: [Role.ADMIN,Role.EMPLOYER,Role.JOB_SEEKER] } },
  {
    path: 'not-authorized',
    component: NotAuthorizedComponent  // Redirect unauthorized access here
  },
  {path:'admin/job-form', component: JobFormComponent},
  {path:'jobs/add', component: JobFormComponent },
  {path:'job-list', component:JobListComponent},
  {path:'admin/job-form', component: JobFormComponent},
  {path:'job-applications', component: ApplicationListComponent }, //
  {path:'job-applications/edit/:id', component: JobApplicationEditComponent },
  {path:'jobs/add', component: JobFormComponent },
  {path:'job-details/:id', component: JobDetailsComponent },
  {path:'jobs/edit/:id', component: JobFormComponent },
  {path:'job-list', component:JobListComponent},

  //Login And Registration
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent},
  {path:'register', component: RegisterComponent },
  //{path:'', redirectTo: '/register', pathMatch: 'full' },


  { path: 'profile', component: ProfileComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
