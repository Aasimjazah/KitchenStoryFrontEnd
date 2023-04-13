import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/MyServices/product-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  product:any;
  user:any;
  flag:boolean=true;

  products:any=
  {

  };
  constructor(private productService:ProductServiceService,private router:Router){}
  ngOnInit(): void {

    this.user = sessionStorage.getItem("user");

    this.productService.getProducts().subscribe(response=>
      {
        this.products=response;
      },
      error=>
      {

      })
  }

  breakdown(product:any) {
     this.flag = false;
     console.log(product);
     this.product = product;
     window.scroll(0, 0);
    }

    breakdownOff()
    {
      this.flag = true;
    }
    order()
    {
      if(this.user!=null)
      {
        sessionStorage.setItem("product",this.product);
        console.log(this.user);
        this.router.navigate(
          ['/order'],
        );
      }
      else
      {
        console.log("Not logged in");
      }
    }

}
