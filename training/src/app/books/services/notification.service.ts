import { Injectable } from '@angular/core';
import {publish, subscribe, unsubscribe} from 'pubsub-js'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }


  notify(topic:string, data:any):void{
    publish(topic, data)
  }
  register(topic:string, callback: (topic:string, data:any)=> void):string{
    return subscribe(topic, callback)
  }
  unregister(token:string):void{
    return unsubscribe(token)
  }
}