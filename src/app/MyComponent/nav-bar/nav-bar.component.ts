import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  flag='signin';

  constructor(){}

  sign()
  {
    console.log("signin function calling");
    this.flag = 'logout';
    console.log(this.flag);
  }

  ngOnInit(): void {
  }

}
