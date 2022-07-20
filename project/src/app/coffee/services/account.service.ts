import { Injectable } from '@angular/core';
import { AccountEntry } from '../entities/account-entry';
import { Coffee } from '../entities/coffee';
import { CoffeeMachineService } from './coffee-machine.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  readonly storageKey = 'javacreamAccount';

  constructor(
    private storageSvc: StorageService,
    private coffeeMachineSvc: CoffeeMachineService
  ) {}

  writeEntry(coffee: Coffee): void {
    const price = this.coffeeMachineSvc.getCoffeePriceAsNumber(coffee.id);
    const entry = new AccountEntry();

    entry.coffee = coffee;
    entry.price = price;

    this.storageSvc.toStorage(this.storageKey, entry);
  }

  getEntries(): AccountEntry[] {
    const entries = this.storageSvc
      .fromStorage<AccountEntry>(this.storageKey)
      .map((entry) => {
        entry.timestamp = new Date(entry.timestamp);

        return entry;
      });

    entries.sort((a, b) => {
      if (a.timestamp > b.timestamp) return -1;
      if (a.timestamp < b.timestamp) return 1;

      return 0;
    });

    return entries;
  }

  resetAccount(): void {
    this.storageSvc.resetStorage(this.storageKey);
  }

  getTotal(): number {
    const prices = this.getEntries().map((entry) => entry.price);
    const total = prices.reduce((previous, current) => previous + current, 0);

    return total;
  }
}
