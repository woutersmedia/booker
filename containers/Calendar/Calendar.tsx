import { Calendar } from "@/components/Calendar";
import demoEvents from "./demoEvents";
import './styles.css';

export const CalendarContainer = () => {
  return (
    <div className="container">
      <Calendar events={demoEvents} />
    </div>
  );
};