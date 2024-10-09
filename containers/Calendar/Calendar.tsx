import { Calendar } from "@/components/Calendar";
import "./styles.css";
import demoEvents from "./demoEvents";

export const CalendarContainer = () => {
  return (
    <div className="container">
      <Calendar events={demoEvents} />
    </div>
  );
};