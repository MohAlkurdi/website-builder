'use client';

import { SectionData } from '@/types';

interface HeaderSectionProps {
  section: SectionData;
  isSelected?: boolean;
  isPreviewMode?: boolean;
  onClick?: () => void;
}

export function HeaderSection({ section }: HeaderSectionProps) {
  const menuItems = section.description?.split(' | ') || ['Home', 'About', 'Services', 'Contact'];

  return (
    <header
      className="w-full py-4 px-6"
      style={{
        backgroundColor: section.backgroundColor || '#ffffff',
        color: section.textColor || '#000000',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">{section.title}</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="hover:opacity-75 transition-opacity"
              onClick={(e) => e.preventDefault()}
            >
              {item.trim()}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
