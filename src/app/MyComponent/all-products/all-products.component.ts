import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/MyServices/product-service.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products:any=
  {

  };
  constructor(private productService:ProductServiceService){}
  ngOnInit(): void {
      this.productService.getProducts().subscribe(response=>
        {
         console.log(response);
         this.products=response
        },
        error=>
        {

        });
  }

}
