import { ProductService } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formModel:FormGroup;

  categories:string[];

  //将ProductService注入进来
  constructor(private prodService:ProductService) { 
    //响应式表单校验
    let fb=new FormBuilder();
    this.formModel=fb.group({
      //至少三位
      title:['',Validators.minLength(3)],
      //默认值null,并添加校验器
      price:[null,this.positiveNumValidator],
      //默认值-1,不校验了
      category:['-1']
    });
  }

  //将构造器中注入的prodSerivce在组件初始化时调用
  ngOnInit() {
    this.categories=this.prodService.getAllCategories();
  }

  //自定义校验器
  positiveNumValidator(control:FormControl):any{
    if(!control.value)
      return null;

      let price=parseInt(control.value);

      if(price>0)
        {return null;}
        //前台HTML绑定这个对象名postitiveNum
      else {return {postitiveNum:true};}
  }


  onSearch(){
    
    //表单全部验证过才能提交
    if(this.formModel.valid){
      console.log(this.formModel.value);
    }
  }
}
