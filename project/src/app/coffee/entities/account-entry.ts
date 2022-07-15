import { Coffee } from './coffee';

export class AccountEntry {
  timestamp = new Date();
  coffee = new Coffee(0, '', 0);
  price = 0;
}
