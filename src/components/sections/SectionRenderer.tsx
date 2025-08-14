'use client';

import React, { memo, useCallback } from 'react';
import { SectionData } from '@/types';
import { HeaderSection } from './HeaderSection';
import { HeroSection } from './HeroSection';
import { ContentSection } from './ContentSection';
import { CTASection } from './CTASection';
import { FooterSection } from './FooterSection';

interface SectionRendererProps {
  section: SectionData;
  isSelected?: boolean;
  isPreviewMode?: boolean;
  onClick?: () => void;
}

export const SectionRenderer = memo(function SectionRenderer({ 
  section, 
  isSelected = false, 
  isPreviewMode = false, 
  onClick 
}: SectionRendererProps) {
  const handleClick = useCallback(() => {
    if (!isPreviewMode && onClick) {
      onClick();
    }
  }, [isPreviewMode, onClick]);

  const sectionProps = {
    section,
    isSelected,
    isPreviewMode,
    onClick: handleClick,
  };

  const sectionElement = (() => {
    switch (section.type) {
      case 'header':
        return <HeaderSection {...sectionProps} />;
      case 'hero':
        return <HeroSection {...sectionProps} />;
      case 'content':
        return <ContentSection {...sectionProps} />;
      case 'cta':
        return <CTASection {...sectionProps} />;
      case 'footer':
        return <FooterSection {...sectionProps} />;
      default:
        return null;
    }
  })();

  if (!sectionElement) return null;

  return (
    <div
      className={`transition-all duration-200 ${
        !isPreviewMode && isSelected 
          ? 'ring-2 ring-blue-500 ring-offset-2' 
          : ''
      } ${!isPreviewMode ? 'hover:ring-2 hover:ring-gray-300 hover:ring-offset-1 cursor-pointer' : ''}`}
      onClick={handleClick}
    >
      {sectionElement}
    </div>
  );
});
