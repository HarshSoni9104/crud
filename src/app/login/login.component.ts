import { Component } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule , FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup

  email ='harshsoni'
  password = '12345'

  constructor(private formBuilder:FormBuilder , private loginService: AuthService , private router:Router){

  }

  ngOnInit(){
    this.createForm()
  }

  hasError(controlName: any , error:any){
    return this.loginForm.get(controlName)?.hasError(error)
  }

  createForm(){
    this.loginForm = this.formBuilder.group({
      email: [null , [Validators.required , Validators.minLength(5)]],
      password:[null , [Validators.required ,  Validators.minLength(5)]]
    })
  }
onSubmit(){
  if (this.loginForm.valid) {
      if (this.email == this.loginForm.get('email')?.value &&  this.password == this.loginForm.get('password')?.value) {
              this.loginService.login()
          this.router.navigate(['add-employee'])
      } 
  }else{
  }
}

}
