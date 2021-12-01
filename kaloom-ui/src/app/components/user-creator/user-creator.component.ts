import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-creator',
  templateUrl: './user-creator.component.html',
  styleUrls: ['./user-creator.component.css']
})
export class UserCreatorComponent implements OnInit {
  
  authd:boolean = false;
  authdUsername:string = "";
  username:string = "";
  usernameValid:boolean = false;
  errMsg:string = "";
  constructor(private fb: FormBuilder,private ds:DataService, private authService:AuthService) {}

  ngOnInit(): void {
    
  }

  authCheck(){
    this.authService.authCheck().subscribe((data:any)=>{
      this.authd = data["authd"];
      this.authdUsername = data["username"]
      console.log(this.authd)
      console.log(this.authdUsername)
    });
    
  }

  submitForm(): void {
    console.log(this.username)
    this.errMsg = ""
    if(this.username.length < 3){
      this.errMsg = "Invalid username";
      
    }
    else{
      this.ds.createUrer(this.username).subscribe(
        data => {this.errMsg = "User created!";console.log("User created..",data);this.authCheck()},
        err => this.errMsg = "Username already exists"
      )
    }
  }

  checkIfUsernameValid(){
    console.log("Valid?")
    this.errMsg = "";
    this.usernameValid = this.username.length > 2;
    this.ds.doesUserExist(this.username).subscribe( (data:any)=>{
      console.log(data)
      if(data["exists"]){
        this.usernameValid = false;
        this.errMsg = "username taken";
        
      }
      else{
        this.errMsg = "valid!"
      }
    })
    
  }
}
