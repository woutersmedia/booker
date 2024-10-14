import { render, screen } from '@testing-library/react';
import { CalendarTimeSlot } from '@/components/Calendar/CalendarTimeSlot';

describe('CalendarTimeSlot', () => {
  it('renders children correctly', () => {
    render(<CalendarTimeSlot><div>Child Element</div></CalendarTimeSlot>);
    expect(screen.getByText('Child Element')).toBeInTheDocument();
  });

  it('renders nothing when no children are provided', () => {
    const { container } = render(<CalendarTimeSlot />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders multiple children correctly', () => {
    render(
      <CalendarTimeSlot>
        <div>First Child</div>
        <div>Second Child</div>
      </CalendarTimeSlot>
    );
    expect(screen.getByText('First Child')).toBeInTheDocument();
    expect(screen.getByText('Second Child')).toBeInTheDocument();
  });
});