import { CalendarItemObject } from "@/types/Calendar";

export const CalendarItem = ({ event }: CalendarItemObject) => {
  return (
    <div className="p-1 w-full">
      <span className="font-semibold">{event.title}</span>
      {event.desc && ':  ' + event.desc}
    </div>
  )
}