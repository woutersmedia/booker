import { render, screen, fireEvent } from '@testing-library/react';
import { SessionProvider } from 'next-auth/react';
import { Calendar } from '@/components/Calendar/Calendar';
import { ReactNode, AwaitedReactNode, JSX } from 'react';

describe("Calendar", () => {
  const mockEvents = [
    { id: 1, title: "Event 1", start: new Date(), end: new Date(new Date().setHours(new Date().getHours() + 1)) },
    { id: 2, title: "Event 2", start: new Date(), end: new Date(new Date().setHours(new Date().getHours() + 2)) }
  ];

  const renderWithSession = (ui: string | number | bigint | boolean | Iterable<ReactNode> | Promise<AwaitedReactNode> | JSX.Element | null | undefined) => {
    return render(
      // @ts-ignore
      <SessionProvider session={{ user: { name: 'Test User' } }}>
        {ui}
      </SessionProvider>
    );
  };

  it('renders the calendar with provided events', () => {
    renderWithSession(<Calendar events={mockEvents} />);
    expect(screen.getByText('Event 1')).toBeInTheDocument();
    expect(screen.getByText('Event 2')).toBeInTheDocument();
  });

  it('renders the calendar header correctly', () => {
    renderWithSession(<Calendar events={mockEvents} />);
    expect(screen.getByText('maandag')).toBeInTheDocument();
    expect(screen.getByText('dinsdag')).toBeInTheDocument();
    expect(screen.getByText('woensdag')).toBeInTheDocument();
    expect(screen.getByText('donderdag')).toBeInTheDocument();
    expect(screen.getByText('vrijdag')).toBeInTheDocument();
    expect(screen.getByText('zaterdag')).toBeInTheDocument();
    expect(screen.getByText('zondag')).toBeInTheDocument();
  });

  it('navigates to the previous month when previous button is clicked', () => {
    renderWithSession(<Calendar events={mockEvents} />);
    const prevButton = screen.getByText('Vorige');
    fireEvent.click(prevButton);
  });

  it('changes view to day when day button is clicked', () => {
    renderWithSession(<Calendar events={mockEvents} />);
    const dayButton = screen.getByText('Dag');
    fireEvent.click(dayButton);
  });

  it('renders the calendar with no events', () => {
    renderWithSession(<Calendar events={[]} />);
    expect(screen.queryByText('Event 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Event 2')).not.toBeInTheDocument();
  });

  it('renders the calendar with multi-day events', () => {
    const multiDayEvents = [
      {
        id: 3,
        title: 'Multi-day Event',
        start: new Date(),
        end: new Date(new Date().setDate(new Date().getDate() + 2)),
      },
    ];
    renderWithSession(<Calendar events={multiDayEvents} />);
    expect(screen.getByText('Multi-day Event')).toBeInTheDocument();
  });
});