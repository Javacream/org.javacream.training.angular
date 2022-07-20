import { Component, OnInit } from '@angular/core';
import { ListItemType } from '../../components/display/display-list/list-item';
import { Coffee } from '../../entities/coffee';
import { AbstractView } from '../abstract-view';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
})
export class MainViewComponent extends AbstractView implements OnInit {
  ngOnInit(): void { }

  buyCoffee(coffee: Coffee): void {
    this.usersSvc.getUserById(1).then((user) => {
      if (this.beansSvc.reduceBeans(coffee.beans)) {
        this.historySvc.writeEntry(user, coffee);
        this.accountSvc.writeEntry(coffee);

        alert(`Hier ist dein ${coffee.name}`);
      } else {
        alert('Es müssen erst Bohnen aufgefüllt werden!');
      }
    });
  }

  async buyCoffeeAsynAwait(coffee: Coffee): Promise<void> {
    let user = await this.usersSvc.getUserById(1);
    if (this.beansSvc.reduceBeans(coffee.beans)) {
      this.historySvc.writeEntry(user, coffee);
      this.accountSvc.writeEntry(coffee);

      alert(`Hier ist dein ${coffee.name}`);
    } else {
      alert('Es müssen erst Bohnen aufgefüllt werden!');
    }
  };

  buyCoffeeObservable(coffee: Coffee): void {
    this.usersSvc.getUserByIdHttpClient().subscribe((user) => {
      if (this.beansSvc.reduceBeans(coffee.beans)) {
        this.historySvc.writeEntry(user, coffee);
        this.accountSvc.writeEntry(coffee);

        alert(`Hier ist dein ${coffee.name}`);
      } else {
        alert('Es müssen erst Bohnen aufgefüllt werden!');
      }
    });
  }

  protected loadItems(): void {
  this.coffeeMachineSvc.coffees.forEach((coffee) => {
    const item = this.createListItem(
      coffee.name,
      this.coffeeMachineSvc.getCoffeePrice(coffee.id)
    );
    item.type = ListItemType.execute;
    item.action = () => this.buyCoffee(coffee);

    this.items.push(item);
  });
}

  protected loadActions(): void {
  this.actions.push(
    this.createAction('Konto', () => this.changeView.emit('account'))
  );
  this.actions.push(
    this.createAction('Historie', () => this.changeView.emit('history'))
  );
  this.actions.push(
    this.createAction('Füllstand', () => this.changeView.emit('level'))
  );
}
}
