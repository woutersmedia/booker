"use client"

import { useState } from "react";
import { Calendar as BigCalendar, dateFnsLocalizer, NavigateAction, View } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { nl } from "date-fns/locale/nl";
import { useSession } from "next-auth/react";

import { CalendarHeader, CalendarTimeSlot, CalendarItem } from "@/components/Calendar";
import { CalenderItemEvents, CalendarItem as CalendarItemType } from "@/types/Calendar";

export const Calendar = ({ events }: { events: CalenderItemEvents }) => {
  const { data: session } = useSession();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<View>("month");

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

  const handleViewChange = (newView: View) => {
    setView(newView);
  };

  return (
    <BigCalendar
      localizer={localizer}
      events={events}
      date={currentDate}
      onNavigate={handleNavigate}
      onView={handleViewChange}
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