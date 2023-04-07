import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css']
})
export class UserAreaComponent implements OnInit
{

  user:any;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.user = this.route.snapshot.queryParamMap.get('user');
    this.user = JSON.parse(this.user);
    console.log(this.user);
  }



}
