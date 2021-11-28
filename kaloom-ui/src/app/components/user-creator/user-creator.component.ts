import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-creator',
  templateUrl: './user-creator.component.html',
  styleUrls: ['./user-creator.component.css']
})
export class UserCreatorComponent implements OnInit {
  
  username:string = "";
  usernameValid:boolean = false;
  errMsg:string = "";
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    
  }

  submitForm(): void {
    console.log(this.username)
    this.errMsg = ""
    if(!this.usernameValid){
      this.errMsg = "Invalid username";
    }
    else{
      this.errMsg = "Username valid!";
    }
  }

  checkIfUsernameValid(){
    console.log("Valid?")
    this.errMsg = "";
    this.usernameValid = this.username.length > 2;

  }
}
