import { Component, OnInit } from '@angular/core';
import { ListItemType } from '../../components/display/display-list/list-item';
import { AbstractView } from '../abstract-view';

@Component({
  selector: 'app-level-view',
  templateUrl: './level-view.component.html',
  styleUrls: ['./level-view.component.css'],
})
export class LevelViewComponent extends AbstractView implements OnInit {
  ngOnInit(): void {}

  fillBeans(): void {
    this.beansSvc.fillBeans();

    this.items = [];
    this.loadItems();

    this.actions = [];
    this.loadActions();
  }

  protected loadItems(): void {
    const currentItem = this.createListItem(
      'Aktueller Stand:',
      `${this.beansSvc.getCurrentBeans()} Bohnen`
    );
    currentItem.type = ListItemType.display;

    const maxItem = this.createListItem(
      'Maximale Menge:',
      `${this.coffeeMachineSvc.maxBeans} Bohnen`
    );
    maxItem.type = ListItemType.display;

    this.items.push(currentItem, maxItem);
  }

  protected loadActions(): void {
    if (this.beansSvc.getCurrentBeans() !== this.coffeeMachineSvc.maxBeans) {
      this.actions.push(this.createAction('Auffüllen', () => this.fillBeans()));
    }

    this.actions.push(
      this.createAction('Start', () => this.changeView.emit('main'))
    );
  }
}
