import { Product, ProductService, Comment } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { WebSocketService } from '../shared/web-socket.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:Product;
  comments:Comment[];

  //评论里默认给5颗星
  newRating:number = 5;
  //保存评价内容
  newComment:string="";

  idCommentHidden=true;

  isWatched:boolean=false;
  currentBid:number;

  subscription:Subscription;

  //在构造器参数里进行注入
  constructor(private routInfo: ActivatedRoute,
              private productService:ProductService,
            private wsService:WebSocketService) {
  
   }

  ngOnInit() {
    let productId:number = this.routInfo.snapshot.params["productId"];
    //不使用Observable<Product[]>的话，可以使用下面这种手工订阅方式
    //所以html绑定Observable流的话就需要使用async管道取值
    //或者使用如下,getProduct返回的是流,那么使用subscribe在其中回调取值
    this.productService.getProduct(productId).subscribe(
      //在回调里赋值
      product=> {
        this.product=product;
        this.currentBid=product.price;
      }
    );
    this.productService.getCommentsForProductId(productId).subscribe(
      comments=> this.comments=comments
    );
  }

  addComment(){
    let comment=new Comment(0,this.product.id,new Date().toISOString(),"某人",this.newRating,this.newComment);
    this.comments.unshift(comment);

    this.newComment=null;
    this.newRating=5;
    this.idCommentHidden=true;

    //总评论星星重新计算 总星数/评论数
    //计算总星星数
    let sum=this.comments.reduce((sum,comment)=>sum+comment.rating,0);
    this.product.rating=sum/this.comments.length;
  }

  watchProduct(){

    if(this.subscription){
    //取消订阅关注
      this.subscription.unsubscribe();
      this.isWatched=false;
      this.subscription=null;

    }

   else{

      this.subscription=this.wsService.createObservableSocket("ws://localhost:8085",this.product.id).subscribe(
        products=>{
          let product=products.find(p=>p.productId==this.product.id);
          this.currentBid=product.bid;
        }
      );
    }
} 
}
