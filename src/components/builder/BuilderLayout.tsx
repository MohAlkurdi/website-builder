'use client';

import { useBuilderStore } from '@/store/builderStore';
import { Toolbar } from './Toolbar';
import { SectionLibrary } from './SectionLibrary';
import { PreviewArea } from './PreviewArea';
import { SectionEditor } from './SectionEditor';

export function BuilderLayout() {
  const { isPreviewMode, selectedSectionId } = useBuilderStore();

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Toolbar />
      
      <div className="flex-1 flex overflow-hidden">
        {!isPreviewMode && (
          <SectionLibrary className="w-80 flex-shrink-0" />
        )}
        
        <PreviewArea className="flex-1" />
        
        {!isPreviewMode && selectedSectionId && (
          <SectionEditor className="w-80 flex-shrink-0" />
        )}
      </div>
    </div>
  );
}
