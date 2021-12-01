import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userExistsUrl:string = "http://localhost:8000/api/users/"
  createUserUrl:string = "http://localhost:8000/api/users"
  constructor(private http: HttpClient) {
    
  }

  doesUserExist(username:string){
    console.log("url :", this.userExistsUrl + username)
    return this.http.get(this.userExistsUrl + username);
  }

  createUrer(username:string){
    return this.http.post(this.createUserUrl,{username:username},{withCredentials:true});
  }
}
