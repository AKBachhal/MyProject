import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usrn: string = '';
  psw = '';
  eror:string="";
  //b:boolean=false;

  constructor(private r: Router, private s:LoginService ) {}

  ngOnInit(): void {


  }

  auth() {
    if (this.usrn == 'abc' && this.psw == '123') {
      this.r.navigate(['/Home']);
      // this.b= true;
      this.s.sub.next(true);

    } else {
      this.eror="Invalid User Name or Password";
      // this.b=false;
    }
    //alert(this.b);
  }
}
