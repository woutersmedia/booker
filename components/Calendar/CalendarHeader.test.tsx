import { render, screen } from '@testing-library/react';
import { CalendarHeader } from '@/components/Calendar/CalendarHeader';
import { HeaderProps } from 'react-big-calendar';

describe('CalendarHeader', () => {
  const mockProps: HeaderProps = {
    label: 'Test Label',
    date: new Date(),
    // @ts-ignore - we don't need to provide all the props
    localizer: {
      format: jest.fn(),
      startOfWeek: jest.fn()
    }
  };

  it('renders the label correctly', () => {
    render(<CalendarHeader {...mockProps} />);
    expect(screen.getAllByText('Test Label')[0]).toBeInTheDocument();
  });

  it('applies the correct class names', () => {
    const { container } = render(<CalendarHeader {...mockProps} />);
    expect(container.firstChild).toHaveClass('p-1');
    expect(screen.getAllByText('Test Label')[0]).toHaveClass('font-semibold');
  });

  it('renders without crashing when label is empty', () => {
    const emptyLabelProps = { ...mockProps, label: '' };
    render(<CalendarHeader {...emptyLabelProps} />);
    expect(screen.getAllByText('')[0]).toBeInTheDocument();
  });
});