import { render, screen, fireEvent } from '@testing-library/react';
import { Calendar } from '@/components/Calendar/Calendar';
import { useSession } from 'next-auth/react';
import { CalenderItemEvents } from '@/types/Calendar';

jest.mock('next-auth/react');

const mockEvents: CalenderItemEvents = [
  {
    id: 1,
    title: 'Event 1',
    start: new Date(),
    end: new Date(),
  },
  {
    id: 2,
    title: 'Event 2',
    start: new Date(),
    end: new Date(),
  },
];

describe('Calendar Container', () => {
  beforeEach(() => {
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { name: 'Test User' } },
    });
  });

  it('renders without crashing when user is authenticated', () => {
    render(<Calendar events={mockEvents} />);
    expect(screen.getByText('Event 1')).toBeInTheDocument();
    expect(screen.getByText('Event 2')).toBeInTheDocument();
  });

  it('does not render when user is not authenticated', () => {
    (useSession as jest.Mock).mockReturnValue({ data: null });
    const { container } = render(<Calendar events={mockEvents} />);
    expect(container.firstChild).toBeNull();
  });

  it('navigates to the next month when next button is clicked', () => {
    render(<Calendar events={mockEvents} />);
    const nextButton = screen.getByText('Volgende');
    fireEvent.click(nextButton);
    // Add assertions to check if the calendar navigated to the next month
  });

  it('changes view to week when week button is clicked', () => {
    render(<Calendar events={mockEvents} />);
    const weekButton = screen.getByText('Week');
    fireEvent.click(weekButton);
  });
});