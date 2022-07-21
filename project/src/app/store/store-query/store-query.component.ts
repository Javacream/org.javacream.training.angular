import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-store-query',
  templateUrl: './store-query.component.html',
  styleUrls: ['./store-query.component.css']
})
export class StoreQueryComponent implements OnInit {
  stock: string
  constructor(readonly storeService: StoreService) { }

  ngOnInit(): void {
  }
  request(){
    console.log("CALLING")
    this.storeService.getStock("books", "ISBN1", this.update)
  }

  update(stock: string){
    console.log("UPDATE" + stock)
    this.stock = stock
  }
}
