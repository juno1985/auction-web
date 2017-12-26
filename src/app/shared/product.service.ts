import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products: Product[]=[
    new Product(1,"第一个商品",1.99,3.5,"商品描述",["电子产品","日用百货"]),
    new Product(2,"第二个商品",1.99,4.5,"商品描述",["运动健身","日用百货"]),
    new Product(3,"第三个商品",1.99,4.0,"商品描述",["生活娱乐","日用百货"]),
    new Product(4,"第四个商品",1.99,1.5,"商品描述",["鞋帽衣服","日用百货"]),
    new Product(5,"第五个商品",1.99,2.5,"商品描述",["外设相关","日用百货"]),
    new Product(6,"第六个商品",1.99,1.0,"商品描述",["养生保健","日用百货"]),
    new Product(7,"第七个商品",1.99,2.5,"商品描述",["电脑器材","日用百货"]),
    new Product(8,"第八个商品",1.99,3.0,"商品描述",["书刊报纸","日用百货"]),
    new Product(9,"第九个商品",1.99,4.0,"商品描述",["小资扯淡","日用百货"])
  ];

  private comments:Comment[]=[
    new Comment(1,1,"2017-02-01 22:22:22","zhangsan",3,"东西不错"),
    new Comment(2,1,"2017-02-01 22:22:22","wangwu",1,"东西不错"),
    new Comment(3,1,"2017-02-01 22:22:22","zhaoliu",2,"东西不错"),
    new Comment(4,2,"2017-02-01 22:22:22","zhangsan",4,"东西不错"),
    new Comment(5,2,"2017-02-01 22:22:22","zhangsan",5,"东西不错"),
    new Comment(6,3,"2017-02-01 22:22:22","zhangsan",3,"东西不错"),
    new Comment(7,4,"2017-02-01 22:22:22","zhangsan",2,"东西不错")
  ]
 
  constructor() { }

  //返回所有类别
  getAllCategories():string[]{
    return ["电子产品","运动健身","生活娱乐",
      "鞋帽衣服","外设相关","养生保健","电脑器材","书刊报纸","小资扯淡"];
  }

  //得到所有商品
  getProducnts():Product[]{
    return this.products;
  }

  //函数:返回类型
  getProduct(id:number):Product{
    return this.products.find((product:Product)=>product.id==id);
  }


  getCommentsForProductId(id:number){
    return this.comments.filter((comment:Comment)=>comment.productId==id);
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