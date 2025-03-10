
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  loginUrl : string = '';
  signUpUrl : string = '';
  
  constructor(private http : HttpClient) {

    this.loginUrl = "http://localhost:9091/auth/login";
    this.signUpUrl = "http://localhost:9091/auth/register";
  
  }

  login(user : User) : Observable<any> {
    return this.http.post<any>(this.loginUrl,user);
  }

  signUp(user : User) : Observable<any> {
    return this.http.post<any>(this.signUpUrl,user);
  }

  
  
}