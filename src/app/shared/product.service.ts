import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import {Observable} from "rxjs";
import 'rxjs/Rx';
@Injectable()
export class ProductService {


 
  constructor(private http:Http) { }

  //返回所有类别
  getAllCategories():string[]{
    return ["电子产品","运动健身","生活娱乐",
      "鞋帽衣服","外设相关","养生保健","电脑器材","书刊报纸","小资扯淡"];
  }

  //得到所有商品
  getProducnts():Observable<Product[]>{
    return this.http.get("/api/products").map(res=>res.json());
  }

  //函数:返回类型
  getProduct(id:number):Observable<Product>{
    return this.http.get("/api/product/"+id).map(res=>res.json());
  }


  getCommentsForProductId(id:number):Observable<Comment[]>{
    // return this.comments.filter((comment:Comment)=>comment.productId==id);
    return this.http.get("/api/product/"+id+"/comment").map(res=>res.json());
  }

}

export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){}
}

export class Comment{
  constructor(
    public id:number,
    public productId:number,
    public timestamp:string,
    public user:string,
    public rating:number,
    public content:string
  ){}
}