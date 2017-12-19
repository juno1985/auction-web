import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  private imgUrl = 'assets/img/4.jpg';

  constructor() { }

  ngOnInit() {
    this.products=[
      new Product(1,"第一个商品",1.99,3.5,"商品描述",["电子产品","日用百货"]),
      new Product(2,"第二个商品",1.99,4.5,"商品描述",["运动健身","日用百货"]),
      new Product(3,"第三个商品",1.99,4.0,"商品描述",["生活娱乐","日用百货"]),
      new Product(4,"第四个商品",1.99,1.5,"商品描述",["鞋帽衣服","日用百货"]),
      new Product(5,"第五个商品",1.99,2.5,"商品描述",["外设相关","日用百货"]),
      new Product(6,"第六个商品",1.99,1.0,"商品描述",["养生保健","日用百货"]),
      new Product(7,"第七个商品",1.99,2.5,"商品描述",["电脑器材","日用百货"]),
      new Product(8,"第八个商品",1.99,3.0,"商品描述",["书刊报纸","日用百货"]),
      new Product(9,"第九个商品",1.99,4.0,"商品描述",["小资扯淡","日用百货"])
    ]
    this.products.push(new Product(10,"第10个商品",1.99,5.0,"商品描述",["小资扯淡","日用百货"]));
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