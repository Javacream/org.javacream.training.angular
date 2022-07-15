import { Component, OnInit } from '@angular/core';
import { ListItemType } from '../../components/display/display-list/list-item';
import { AbstractView } from '../abstract-view';

@Component({
  selector: 'app-history-view',
  templateUrl: './history-view.component.html',
  styleUrls: ['./history-view.component.css'],
})
export class HistoryViewComponent extends AbstractView implements OnInit {
  ngOnInit(): void {}

  protected loadItems(): void {
    this.historySvc.getEntries().forEach((entry) => {
      const item = this.createListItem(
        entry.user.name,
        entry.coffee.name,
        this.coffeeMachineSvc.getCoffeePrice(entry.coffee.id)
      );

      item.date = entry.timestamp;
      item.type = ListItemType.noexecute;

      this.items.push(item);
    });
  }

  protected loadActions(): void {
    this.actions.push(
      this.createAction('Start', () => this.changeView.emit('main'))
    );
  }
}
