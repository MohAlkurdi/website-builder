'use client';

import { SectionData } from '@/types';
import { Button } from '@/components/ui/Button';

interface CTASectionProps {
  section: SectionData;
  isSelected?: boolean;
  isPreviewMode?: boolean;
  onClick?: () => void;
}

export function CTASection({ section }: CTASectionProps) {
  return (
    <section
      className="w-full py-20 px-6"
      style={{
        backgroundColor: section.backgroundColor || '#3b82f6',
        color: section.textColor || '#ffffff',
      }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl lg:text-5xl font-bold">
          {section.title}
        </h2>
        {section.description && (
          <p className="text-xl opacity-90 leading-relaxed">
            {section.description}
          </p>
        )}
        {section.buttonText && (
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-gray-900 hover:bg-gray-100"
          >
            {section.buttonText}
          </Button>
        )}
      </div>
    </section>
  );
}
