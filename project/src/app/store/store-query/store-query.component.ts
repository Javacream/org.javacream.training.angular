import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-store-query',
  templateUrl: './store-query.component.html',
  styleUrls: ['./store-query.component.css']
})
export class StoreQueryComponent implements OnInit {
  stock: number
  constructor(readonly storeService: StoreService) { }

  ngOnInit(): void {
  }
  request(){
    this.storeService.getStock("books", "ISBN1", this.update)
  }

  update(stock: number){
    this.stock = stock
  }
}
