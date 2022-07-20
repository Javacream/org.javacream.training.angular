import { Component, EventEmitter, Output } from '@angular/core';
import {
  FooterAction,
  FooterActionType,
} from '../components/display/display-footer/display-footer-actions/footer-action';
import { ListItem } from '../components/display/display-list/list-item';
import { AccountService } from '../services/account.service';
import { BeansService } from '../services/beans.service';
import { CoffeeMachineService } from '../services/coffee-machine.service';
import { DatetimeService } from '../services/datetime.service';
import { HistoryService } from '../services/history.service';
import { UsersService } from '../services/users.service';

@Component({ template: '' })
export abstract class AbstractView {
  @Output() changeView = new EventEmitter<string>();

  items: ListItem[] = [];
  actions: FooterAction[] = [];

  constructor(
    protected coffeeMachineSvc: CoffeeMachineService,
    protected accountSvc: AccountService,
    protected historySvc: HistoryService,
    protected datetimeSvc: DatetimeService,
    protected usersSvc: UsersService,
    protected beansSvc: BeansService
  ) {
    this.loadItems();
    this.loadActions();
  }

  protected abstract loadItems(): void;
  protected abstract loadActions(): void;

  protected createListItem(...columns: string[]): ListItem {
    const item = new ListItem(this.datetimeSvc);
    item.columns = columns;

    return item;
  }

  protected createAction(
    name: string,
    callback: Function = () => {},
    type: FooterActionType = FooterActionType.execute
  ): FooterAction {
    const action = new FooterAction();
    action.actionName = name;
    action.actionType = type;
    action.action = callback;

    return action;
  }
}
