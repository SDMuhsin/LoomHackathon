import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authCheckUrl:string = "http://localhost:8000/api/users/session/authcheck"
  
  private authdUserSubject: BehaviorSubject<any>;
  public authdUserData:Observable<any>;
  constructor(private http:HttpClient) { 
    this.authdUserSubject = new BehaviorSubject<any>({authd:false,username:""});
    this.authdUserData = this.authdUserSubject.asObservable();
  }

  getCurrentAuthData(){
    return this.authdUserSubject.value;
  }

  authCheck(){
    
    return this.http.get(this.authCheckUrl,{withCredentials:true})
    .pipe(map(authData=>{
      console.log("[AuthService] authCheck ", authData)
      this.authdUserSubject.next(authData)
      return authData
    }))
  }

}
