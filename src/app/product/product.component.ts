import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import {Observable} from "rxjs";
import 'rxjs/Rx';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Observable<Product[]>;
  private imgUrl = 'assets/img/4.jpg';

  constructor(private productService:ProductService) { 
    
  }

  ngOnInit() {
  
    this.products=this.productService.getProducnts();

    //订阅productService中的事件流
    this.productService.searchEvent.subscribe(
      params=>{
        console.log("product组件得到的值为: "+params.title+" "+params.price+" "+params.category);
        this.products=this.productService.search(params);
      }
    );
  }

}
