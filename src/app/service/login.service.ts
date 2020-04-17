import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
sub = new BehaviorSubject<any>(false);
  constructor() { }
}
