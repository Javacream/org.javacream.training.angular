import { Component, Input, OnInit } from '@angular/core';
import { ListItem, ListItemType } from './list-item';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css'],
})
export class DisplayListComponent implements OnInit {
  @Input() items: ListItem[] = [];

  itemType = ListItemType;

  ngOnInit(): void {}
}
