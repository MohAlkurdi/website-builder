import { render, screen, fireEvent } from '@testing-library/react';
import { SectionRenderer } from '@/components/sections/SectionRenderer';
import { SectionData } from '@/types';

const mockSection: SectionData = {
  id: '1',
  type: 'hero',
  title: 'Test Hero',
  description: 'Test description',
  imageUrl: 'https://example.com/image.jpg',
  buttonText: 'Click me',
  buttonUrl: '#',
  backgroundColor: '#ffffff',
  textColor: '#000000',
};

describe('SectionRenderer', () => {
  it('should render hero section correctly', () => {
    render(<SectionRenderer section={mockSection} />);
    
    expect(screen.getByText('Test Hero')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should show selection ring when selected', () => {
    const { container } = render(
      <SectionRenderer section={mockSection} isSelected={true} />
    );
    
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass('ring-2', 'ring-blue-500');
  });

  it('should call onClick when clicked in edit mode', () => {
    const onClick = jest.fn();
    render(
      <SectionRenderer 
        section={mockSection} 
        onClick={onClick}
        isPreviewMode={false}
      />
    );
    
    const wrapper = screen.getByText('Test Hero').closest('div');
    fireEvent.click(wrapper!);
    
    expect(onClick).toHaveBeenCalled();
  });

  it('should not call onClick in preview mode', () => {
    const onClick = jest.fn();
    render(
      <SectionRenderer 
        section={mockSection} 
        onClick={onClick}
        isPreviewMode={true}
      />
    );
    
    const wrapper = screen.getByText('Test Hero').closest('div');
    fireEvent.click(wrapper!);
    
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should render header section', () => {
    const headerSection: SectionData = {
      id: '2',
      type: 'header',
      title: 'Test Header',
      description: 'Home | About | Contact',
      backgroundColor: '#ffffff',
      textColor: '#000000',
    };

    render(<SectionRenderer section={headerSection} />);
    
    expect(screen.getByText('Test Header')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('should render content section', () => {
    const contentSection: SectionData = {
      id: '3',
      type: 'content',
      title: 'Test Content',
      description: 'Content description',
      imageUrl: 'https://example.com/content.jpg',
      backgroundColor: '#ffffff',
      textColor: '#000000',
    };

    render(<SectionRenderer section={contentSection} />);
    
    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.getByText('Content description')).toBeInTheDocument();
  });

  it('should render CTA section', () => {
    const ctaSection: SectionData = {
      id: '4',
      type: 'cta',
      title: 'Test CTA',
      description: 'CTA description',
      buttonText: 'Get Started',
      buttonUrl: '#',
      backgroundColor: '#3b82f6',
      textColor: '#ffffff',
    };

    render(<SectionRenderer section={ctaSection} />);
    
    expect(screen.getByText('Test CTA')).toBeInTheDocument();
    expect(screen.getByText('CTA description')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('should render footer section', () => {
    const footerSection: SectionData = {
      id: '5',
      type: 'footer',
      title: 'Test Footer',
      description: '© 2024 Test Company | Privacy | Terms',
      backgroundColor: '#1f2937',
      textColor: '#ffffff',
    };

    render(<SectionRenderer section={footerSection} />);
    
    expect(screen.getByText('Test Footer')).toBeInTheDocument();
    expect(screen.getByText('© 2024 Test Company')).toBeInTheDocument();
  });
});
