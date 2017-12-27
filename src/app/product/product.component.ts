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
  }

}
