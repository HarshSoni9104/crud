    import { Routes } from '@angular/router';
    import { LoginComponent } from './login/login.component';
    import { AuthGuard } from './auth.guard';
    import { AddEmployeeComponent } from './add-employee/add-employee.component';

    export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'add-employee',
    component: AddEmployeeComponent,
    canActivate: [AuthGuard]
  }
];

