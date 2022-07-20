import { Component, Input, OnInit } from '@angular/core';
import { FooterAction } from './display-footer-actions/footer-action';

@Component({
  selector: 'app-display-footer',
  templateUrl: './display-footer.component.html',
  styleUrls: ['./display-footer.component.css'],
})
export class DisplayFooterComponent implements OnInit {
  @Input() actions: FooterAction[] = [];

  constructor() {}

  ngOnInit(): void {}
}
