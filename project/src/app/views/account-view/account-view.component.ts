import { Component, OnInit } from '@angular/core';
import { FooterActionType } from '../../components/display/display-footer/display-footer-actions/footer-action';
import { ListItemType } from '../../components/display/display-list/list-item';
import { AbstractView } from '../abstract-view';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css'],
})
export class AccountViewComponent extends AbstractView implements OnInit {
  ngOnInit(): void {}

  protected loadItems(): void {
    this.accountSvc.getEntries().forEach((entry) => {
      const item = this.createListItem(
        entry.coffee.name,
        this.coffeeMachineSvc.getCoffeePrice(entry.coffee.id)
      );
      item.type = ListItemType.noexecute;
      item.date = entry.timestamp;

      this.items.push(item);
    });
  }

  payBill(): void {
    let money = prompt('Bitte Geld einwerfen:', '0') || '0';
    money = money.indexOf(',') > -1 ? money.replace(',', '.') : money;
    const amount = parseFloat(money);

    const diff = (this.accountSvc.getTotal() - amount) * -1;

    if (diff > 0) alert(`Hier ist dein Restgeld: ${diff.toFixed(2)} €`);

    this.accountSvc.resetAccount();
    this.items = [];
    this.actions = [];

    this.loadActions();
  }

  protected loadActions(): void {
    this.actions.push(
      this.createAction(
        `Saldo: ${this.accountSvc.getTotal().toFixed(2)} €`,
        () => {},
        FooterActionType.display
      )
    );

    if (this.accountSvc.getTotal() > 0) {
      this.actions.push(this.createAction('Bezahlen', () => this.payBill()));
    }

    this.actions.push(
      this.createAction('Start', () => this.changeView.emit('main'))
    );
  }
}
