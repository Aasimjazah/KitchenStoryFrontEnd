import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/MyServices/user.service';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit{

  data={
    email:"",
    password:"",
  }

  ngOnInit(): void {
      
  }

  constructor(private user:UserService){}

  userSignIn()
  {
    console.log(this.data);
    this.user.userSignIn(this.data).subscribe(
      response=>{
        console.log(response);
      },
      error=>
      {
       console.log(error);
      }
    )
  }
}
