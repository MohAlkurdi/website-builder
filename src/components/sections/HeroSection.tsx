'use client';

import { SectionData } from '@/types';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

interface HeroSectionProps {
  section: SectionData;
  isSelected?: boolean;
  isPreviewMode?: boolean;
  onClick?: () => void;
}

export function HeroSection({ section }: HeroSectionProps) {
  return (
    <section
      className="w-full py-20 px-6"
      style={{
        backgroundColor: section.backgroundColor || '#f8fafc',
        color: section.textColor || '#1e293b',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              {section.title}
            </h1>
            {section.description && (
              <p className="text-xl text-opacity-80 leading-relaxed">
                {section.description}
              </p>
            )}
            {section.buttonText && (
              <Button size="lg" className="mt-8">
                {section.buttonText}
              </Button>
            )}
          </div>
          {section.imageUrl && (
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={section.imageUrl}
                alt={section.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
