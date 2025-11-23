import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot , Router} from "@angular/router";
import { AuthService } from "./service/auth.service";


@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate{
  isLoggedIn:any
  constructor(private authService: AuthService, private router: Router) {
    this.authService.getLogin().subscribe({
      next:(res:any) => {
          this.isLoggedIn = res
      }
    })
  }



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    
    
if (this.authService.loginBehaviour.value) {
      return true;
    }
    return this.router.parseUrl('/');
  }

  }

