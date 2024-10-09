export type CalendarItem = {
  title: string;
  desc?: string;
  start: Date;
  end: Date;
}

export type CalendarItemObject = {
  event: CalendarItem;
}

export type CalenderItemEvents = CalendarItem[];