import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service2Service } from 'src/app/MyServices/service2.service';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css']
})
export class UserAreaComponent implements OnInit
{

  user:any={
   email:"",
   name:"",
   dob:"",
   gender:"",
   pno:"",
   password:""

  };

  constructor(private route: ActivatedRoute, public serve: Service2Service){
    serve.flag="user";
  }

  ngOnInit(): void {
    this.user = sessionStorage.getItem("user");
    this.user = JSON.parse(this.user);
    console.log(this.user);
  }



}
