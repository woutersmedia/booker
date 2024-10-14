"use client";

import { useState } from "react";
import { Calendar as BigCalendar, NavigateAction, View } from "react-big-calendar";
import { useSession } from "next-auth/react";
import { formats, localizer, messages } from './config';
import "react-big-calendar/lib/css/react-big-calendar.css";

import { CalendarHeader, CalendarTimeSlot, CalendarItem } from "@/components/Calendar";
import { CalenderItemEvents } from "@/types/Calendar";

export const Calendar = ({ events }: { events: CalenderItemEvents }) => {
  const { data: session } = useSession();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<View>("month");

  if (!session) {
    return null;
  }

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
      formats={formats}
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
      messages={messages}
      className="min-h-[700px]"
    />
  );
};