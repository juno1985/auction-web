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

  constructor() { }

  ngOnInit() {

    // this.stars = [false, true, true, true, true];
    this.stars = [];
    for(let i = 1; i <=5; i++){
      this.stars.push(i > this.rating);

    }
  }

}
