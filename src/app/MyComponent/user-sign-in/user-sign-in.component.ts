import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/MyServices/user.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Router } from '@angular/router';

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

  constructor(private user:UserService, private nav:NavBarComponent , private router:Router){}

  userSignIn()
  {

    console.log(this.data);
    this.user.userSignIn(this.data).subscribe(
      response=>{
        console.log(response);
        this.nav.sign();
        const user = JSON.stringify(response);
        this.router.navigate(
          ['/userArea'],
          { queryParams: { user: user} }
        );

      },
      error=>
      {
       console.log(error);
      }
    )

  }
}
