import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 loginBehaviour = new BehaviorSubject<boolean>(false)
isLoggedIn = this.loginBehaviour.value;

getLogin(){
  return this.loginBehaviour.asObservable()
}

login(){
  this.loginBehaviour.next(true)
}



  constructor() { 


  }
}
