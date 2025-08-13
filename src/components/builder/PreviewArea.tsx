'use client';

import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useBuilderStore } from '@/store/builderStore';
import { SectionRenderer } from '@/components/sections/SectionRenderer';
import { DragResult } from '@/types';

interface PreviewAreaProps {
  className?: string;
}

export function PreviewArea({ className = '' }: PreviewAreaProps) {
  const {
    currentPage,
    selectedSectionId,
    isPreviewMode,
    selectSection,
    reorderSections,
    setDragging,
  } = useBuilderStore();

  const handleDragEnd = (result: DragResult) => {
    setDragging(false);
    
    if (!result.destination) {
      return;
    }

    if (result.source.index !== result.destination.index) {
      reorderSections(result.source.index, result.destination.index);
    }
  };

  const handleDragStart = () => {
    setDragging(true);
  };

  const handleSectionClick = (sectionId: string) => {
    if (!isPreviewMode) {
      selectSection(sectionId);
    }
  };

  if (currentPage.sections.length === 0) {
    return (
      <div className={`bg-gray-50 flex items-center justify-center ${className}`}>
        <div className="text-center py-20">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Start Building Your Page
          </h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Add sections from the library to start creating your website. You can drag and drop to reorder them.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gray-50 overflow-auto ${className}`}>
      <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        <Droppable droppableId="sections" direction="vertical">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={`min-h-full transition-colors duration-200 ${
                snapshot.isDraggingOver ? 'bg-blue-50' : ''
              }`}
            >
              {currentPage.sections.map((section, index) => (
                <Draggable
                  key={section.id}
                  draggableId={section.id}
                  index={index}
                  isDragDisabled={isPreviewMode}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className={`transition-transform duration-200 ${
                        snapshot.isDragging ? 'rotate-2 scale-105 z-50' : ''
                      }`}
                    >
                      <div
                        {...provided.dragHandleProps}
                        className={`relative group ${
                          !isPreviewMode ? 'hover:shadow-lg' : ''
                        }`}
                      >
                        {!isPreviewMode && (
                          <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                            <div className="bg-gray-700 text-white p-2 rounded cursor-grab active:cursor-grabbing">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                              </svg>
                            </div>
                          </div>
                        )}
                        <SectionRenderer
                          section={section}
                          isSelected={selectedSectionId === section.id}
                          isPreviewMode={isPreviewMode}
                          onClick={() => handleSectionClick(section.id)}
                        />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
