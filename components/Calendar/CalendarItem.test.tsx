import { render, screen } from '@testing-library/react';
import { CalendarItem } from '@/components/Calendar/CalendarItem';
import { CalendarItemObject } from '@/types/Calendar';

describe('CalendarItem', () => {
  const mockEvent: CalendarItemObject = {
    event: {
      id: 1,
      start: new Date(),
      end: new Date(new Date().setDate(new Date().getDate() + 1)),
      title: 'Test Event',
      desc: 'This is a test description'
    }
  };

  it('renders the event title correctly', () => {
    render(<CalendarItem {...mockEvent} />);
    expect(screen.getByText('Test Event')).toBeInTheDocument();
  });

  it('renders the event description correctly when provided', () => {
    render(<CalendarItem {...mockEvent} />);
    expect(screen.getByText(': This is a test description')).toBeInTheDocument();
  });

  it('does not render the event description when not provided', () => {
    const eventWithoutDesc = { event: { id: 1, start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 1)), title: 'Test Event' } };
    render(<CalendarItem {...eventWithoutDesc} />);
    expect(screen.getByText('Test Event')).toBeInTheDocument();
    expect(screen.queryByText(':  ')).not.toBeInTheDocument();
  });
});