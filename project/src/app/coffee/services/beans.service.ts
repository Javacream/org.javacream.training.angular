import { Injectable } from '@angular/core';
import { BeansState } from '../entities/beans-state';
import { CoffeeMachineService } from './coffee-machine.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class BeansService {
  readonly storageKey = 'kittyBeans';

  constructor(
    private storageSvc: StorageService,
    private coffeeMachineSvc: CoffeeMachineService
  ) {}

  getCurrentBeans(): number {
    const beansState = this.storageSvc.fromStorage<BeansState>(this.storageKey);

    return beansState.length > 0 ? beansState[0].current : 0;
  }

  fillBeans(): void {
    const beansState = this.storageSvc.fromStorage<BeansState>(this.storageKey);

    this.storageSvc.resetStorage(this.storageKey);
    this.storageSvc.toStorage(
      this.storageKey,
      new BeansState(this.coffeeMachineSvc.maxBeans)
    );
  }

  reduceBeans(beans: number): boolean {
    const currentTotalBeans = this.getCurrentBeans();
    const totalBeans = currentTotalBeans - beans;

    this.storageSvc.resetStorage(this.storageKey);

    if (totalBeans >= 0) {
      this.storageSvc.toStorage(this.storageKey, new BeansState(totalBeans));
      return true;
    }

    return false;
  }
}
