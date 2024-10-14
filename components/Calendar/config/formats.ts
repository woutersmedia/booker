import { DateLocalizer } from 'react-big-calendar';

export const formats = {
  dateFormat: "dd",
  timeGutterFormat: "HH:mm",
  eventTimeRangeFormat: ({ start, end }: { start: Date; end: Date }, culture: string, localizer: DateLocalizer) =>
    `${localizer.format(start, 'HH:mm', culture)} - ${localizer.format(end, 'HH:mm', culture)}`,
  allDayEventFormat: ({ start, end }: { start: Date; end: Date }, culture: string, localizer: DateLocalizer) =>
    `${localizer.format(start, 'HH:mm', culture)} - ${localizer.format(end, 'HH:mm', culture)}`,
};