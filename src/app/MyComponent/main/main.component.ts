import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/MyServices/product-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  products:any=
  {
    
  };
  constructor(private productService:ProductServiceService){}
  ngOnInit(): void {
      
    this.productService.getProducts().subscribe(response=>
      {
        this.products=response;
      },
      error=>
      {

      })
  }

}
