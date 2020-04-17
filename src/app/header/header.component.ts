import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
b;

  constructor(private s: LoginService) { }

  ngOnInit(): void {
    this.s.sub.next(this.b);
    this.s.sub.subscribe(a=>this.b=a);
  }
  log()
  {
    this.b=false;
  }

}
