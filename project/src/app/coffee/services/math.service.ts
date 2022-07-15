import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  /**
   * Converts and rounds number to either number or decimal representation.
   *
   * @author Thomas Ohms
   * @license MIT
   *
   * @example (1.01, 2) => 1
   * @example (1.06, 2) => 1.06
   *
   * @param number The number to convert
   * @param precision How many digits max on right side
   * @returns The final number
   */
  numberToDecimal(number: number, precision: number): number {
    const x = Math.pow(10, precision);
    return Math.round(number * x) / x;
  }
}
