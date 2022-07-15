import { Injectable } from '@angular/core';
import { Coffee } from '../entities/coffee';

@Injectable({
  providedIn: 'root',
})
export class CoffeeMachineService {
  maxBeans = 500;
  pricePerBean = 0.1;

  get coffees(): Coffee[] {
    return [
      new Coffee(1, 'Kaffee', 10),
      new Coffee(2, 'Espresso', 20),
      new Coffee(3, 'Milchkaffee', 5),
    ];
  }

  getCoffeePrice(coffeeId: number): string {
    const price = this.getCoffeePriceAsNumber(coffeeId);

    return `${price.toFixed(2)} €`;
  }

  getCoffeePriceAsNumber(coffeeId: number): number {
    const coffee = this.getCoffeeById(coffeeId) || new Coffee(0, '', 0);
    const price = this.pricePerBean * coffee.beans;

    return price;
  }

  getCoffeeById(id: number): Coffee | undefined {
    return this.coffees.find((coffee) => coffee.id === id);
  }
}
