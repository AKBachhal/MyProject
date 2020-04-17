import { Injectable } from '@angular/core';
import { CanActivate ,Router} from '@angular/router';
import { LoginService } from '../service/login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
auths;
  constructor(private s: LoginService, private r: Router){}


  canActivate(): boolean {
    this.s.sub.subscribe((a)=>this.auths=a)
    if(this.auths){
    return true;
    }
    else{
      this.r.navigate(['/login'])
      return false;
    }
  }

}
