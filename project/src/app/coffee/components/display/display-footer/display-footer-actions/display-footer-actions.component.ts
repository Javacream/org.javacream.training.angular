import { Component, Input, OnInit } from '@angular/core';
import { FooterAction } from './footer-action';

@Component({
  selector: 'app-display-footer-actions',
  templateUrl: './display-footer-actions.component.html',
  styleUrls: ['./display-footer-actions.component.css']
})
export class DisplayFooterActionsComponent implements OnInit {
  @Input() actions: FooterAction[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
