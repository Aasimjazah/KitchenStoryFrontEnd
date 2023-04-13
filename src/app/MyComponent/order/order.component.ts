import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  product:any;
  user:any;

  ngOnInit(): void {
      this.product = sessionStorage.getItem("product");
      this.user = sessionStorage.getItem("user");

      console.log(JSON.stringify(this.user));
  }
}
