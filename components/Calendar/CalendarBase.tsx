"use client";

import { useState } from "react";
import { Calendar as BigCalendar, dateFnsLocalizer, NavigateAction, View } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { nl } from "date-fns/locale/nl";
import { useSession } from "next-auth/react";

import { CalendarHeader, CalendarTimeSlot, CalendarItem } from "@/components/Calendar";
import { CalendarItem as CalendarItemType } from "@/types/Calendar";

export const CalendarBase = ({ events, view }: {
  events: CalendarItemType[],
  view: View,
  setView: (view: "month" | "week" | "day" | "agenda" | "work_week") => void
}) => {
  const { data: session } = useSession();
  const [currentDate, setCurrentDate] = useState(new Date());

  if (!session) {
    return null;
  }

  const locales = {
    "nl-NL": nl
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: (date: any) => startOfWeek(date, { weekStartsOn: 1 }),
    getDay,
    locales
  });

  const handleNavigate = (newDate: Date, view: View, action: NavigateAction) => {
    setCurrentDate(newDate);
  };

  return (
    <BigCalendar
      localizer={localizer}
      events={events}
      date={currentDate}
      onNavigate={handleNavigate}
      defaultDate={new Date()}
      startAccessor="start"
      endAccessor="end"
      showMultiDayTimes
      components={{
        event: CalendarItem,
        header: CalendarHeader,
        timeSlotWrapper: CalendarTimeSlot
      }}
      culture="nl-NL"
      view={view}
      popup={true}
    />
  );
};