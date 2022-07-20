import { AccountEntry } from './account-entry';
import { User } from './user';

export class HistoryEntry extends AccountEntry {
  user = new User();
}
