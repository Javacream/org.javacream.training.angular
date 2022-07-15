import { DatetimeService } from 'src/app/coffee/services/datetime.service';

export class ListItem {
  type: ListItemType = ListItemType.noexecute;
  date?: Date;
  columns: string[] = [];
  action?: Function;

  constructor(private datetimeSvc: DatetimeService) {}

  dateToString(): string {
    return this.datetimeSvc.toCustomDateTimeString(this.date || new Date());
  }
}

export enum ListItemType {
  execute,
  noexecute,
  display,
}
