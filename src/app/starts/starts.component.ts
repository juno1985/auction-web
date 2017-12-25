//注意Input的导入
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'app-starts',
  templateUrl: './starts.component.html',
  styleUrls: ['./starts.component.css']
})
export class StartsComponent implements OnInit {

  private stars: boolean[];
  @Input()
  private rating: number = 0;

  @Input()
  private readonly:boolean=true;

  //将评星发射出去,可以让父组件得到值
  //这里注意,父组件向子组件传值使用属性绑定
  //子组件向父组件就得用这种@Output发射事件方式,泛型内是发射值的类型
  //注意!!!此处@Output的变量名必须为上面@Input名+Change
  @Output()
  private ratingChange:EventEmitter<number>=new EventEmitter();

  constructor() { }

  ngOnInit() {

    // this.stars = [false, true, true, true, true];
    this.stars = [];
    for(let i = 1; i <=5; i++){
      this.stars.push(i > this.rating);

    }
  }

  clickStar(index:number){
    if(!this.readonly){
      //点击第一个星星时,下标是0,得到的星星个数是0+1
      this.rating=index+1;

      //重新计算总星星数
      this.ngOnInit();

      //将评星数发射出去,共父组件得到
      this.ratingChange.emit(this.rating);
    }
  }

}
