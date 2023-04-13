import { Component, OnInit} from '@angular/core';
import { Service2Service } from 'src/app/MyServices/service2.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user:any;
  flag: boolean = false;
  flag2: Service2Service;


  constructor(public serve: Service2Service){
  this.flag2 = serve;
  }

  sign()
  {
    console.log("sign function calling", this.flag);
    this.flag=false;
  }

  signout()
  {
    sessionStorage.removeItem('user');
    console.log("signout function calling", this.flag);
    this.flag2.flag="main";
  }

  ngOnInit(): void {
    this.user = sessionStorage.getItem("user");
  }

}
