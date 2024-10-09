import { HeaderProps } from 'react-big-calendar';

export const CalendarHeader = ({ label }: HeaderProps) => {
  return (
    <div className="p-1">
      <span className="font-semibold">{label}</span>
    </div>
  );
};