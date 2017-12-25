//注意Input的导入
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-starts',
  templateUrl: './starts.component.html',
  styleUrls: ['./starts.component.css']
})
export class StartsComponent implements OnInit {

  private stars: boolean[];
  @Input()
  private rating: number = 0;

  private readonly:boolean=true;
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
    }
  }

}
