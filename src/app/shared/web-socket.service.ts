
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class WebSocketService{

    ws:WebSocket;
    constructor(){}

    //和服务器建立socket连接并返回流
    createObservableSocket(url:string, id:number):Observable<any>{
        this.ws=new WebSocket(url);
        return new Observable<string>(
            observer=>{
                this.ws.onmessage=(event)=>observer.next(event.data);
                this.ws.onerror=(event)=>observer.error(event);
                this.ws.onclose=(event)=>observer.complete();
                this.ws.onopen=(event)=>this.sendMessage({productId:id});
            }
            //将返回的字符串转为对象
        ).map(message=>JSON.parse(message));
    }

    sendMessage(message:any){
        //将对象转化成字符串发送出去
        this.ws.send(JSON.stringify(message));
    }
}