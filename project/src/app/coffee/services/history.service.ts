import { Injectable } from '@angular/core';
import { Coffee } from '../entities/coffee';
import { HistoryEntry } from '../entities/history-entry';
import { User } from '../entities/user';
import { CoffeeMachineService } from './coffee-machine.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  readonly storageKey = 'kittyHistory';

  constructor(
    private storageSvc: StorageService,
    private coffeeMachineSvc: CoffeeMachineService
  ) {}

  writeEntry(user: User, coffee: Coffee): void {
    const price = this.coffeeMachineSvc.getCoffeePriceAsNumber(coffee.id);
    const entry = new HistoryEntry();

    entry.user = user;
    entry.coffee = coffee;
    entry.price = price;

    this.storageSvc.toStorage(this.storageKey, entry);
  }

  getEntries(): HistoryEntry[] {
    const entries = this.storageSvc
      .fromStorage<HistoryEntry>(this.storageKey)
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
}
