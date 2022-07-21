import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-store-update',
  templateUrl: './store-update.component.html',
  styleUrls: ['./store-update.component.css']
})
export class StoreUpdateComponent implements OnInit {
  
  constructor(readonly storeService: StoreService) { }

  ngOnInit(): void {
  }

  request(){
    this.storeService.setStock("books", "ISBN42", 42, this.update)
  }

  update(){
    
  }


}
