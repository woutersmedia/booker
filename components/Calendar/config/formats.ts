import { Formats, DateFormatFunction, DateRangeFormatFunction } from "react-big-calendar";

export const formats: Formats = {
  dateFormat: "dd",
  timeGutterFormat: "HH:mm",

  eventTimeRangeFormat: (({ start, end }, culture, localizer) => {
    return `${localizer!.format(start, "HH:mm", culture)} - ${localizer!.format(end, "HH:mm", culture)}`;
  }) as DateRangeFormatFunction,

  dayFormat: ((date, culture, localizer) => {
    return localizer!.format(date, "MMM dd", culture);
  }) as DateFormatFunction
};
