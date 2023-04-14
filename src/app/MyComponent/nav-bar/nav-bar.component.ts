import { Component, OnInit} from '@angular/core';
import { Service2Service } from 'src/app/MyServices/service2.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user:any;
 
 

  constructor(public service2: Service2Service){
    
  }

  signOut()
  {
    sessionStorage.removeItem('user');
    this.service2.saveState("main");
  }

  ngOnInit(): void {
    this.user = sessionStorage.getItem("user") as string;
    this.user=JSON.parse(this.user);
    console.log(this.user.name);
  }

}
