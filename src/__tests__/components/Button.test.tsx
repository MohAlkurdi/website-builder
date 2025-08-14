import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('Button', () => {
  it('should render with default props', () => {
    render(<Button>Click me</Button>);
    
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-blue-600', 'text-white', 'h-10');
  });

  it('should render with secondary variant', () => {
    render(<Button variant="secondary">Secondary</Button>);
    
    const button = screen.getByRole('button', { name: 'Secondary' });
    expect(button).toHaveClass('bg-gray-100', 'text-gray-900');
  });

  it('should render with outline variant', () => {
    render(<Button variant="outline">Outline</Button>);
    
    const button = screen.getByRole('button', { name: 'Outline' });
    expect(button).toHaveClass('border', 'border-gray-300', 'bg-transparent');
  });

  it('should render with ghost variant', () => {
    render(<Button variant="ghost">Ghost</Button>);
    
    const button = screen.getByRole('button', { name: 'Ghost' });
    expect(button).toHaveClass('hover:bg-gray-100');
  });

  it('should render with small size', () => {
    render(<Button size="sm">Small</Button>);
    
    const button = screen.getByRole('button', { name: 'Small' });
    expect(button).toHaveClass('h-9', 'px-3', 'text-sm');
  });

  it('should render with large size', () => {
    render(<Button size="lg">Large</Button>);
    
    const button = screen.getByRole('button', { name: 'Large' });
    expect(button).toHaveClass('h-11', 'px-8', 'text-lg');
  });

  it('should handle click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);
    
    const button = screen.getByRole('button', { name: 'Clickable' });
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    
    const button = screen.getByRole('button', { name: 'Disabled' });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-50', 'disabled:pointer-events-none');
  });

  it('should accept custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    
    const button = screen.getByRole('button', { name: 'Custom' });
    expect(button).toHaveClass('custom-class');
  });

  it('should forward ref correctly', () => {
    const ref = { current: null };
    render(<Button ref={ref}>Ref test</Button>);
    
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
