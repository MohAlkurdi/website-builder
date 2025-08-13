'use client';

import { useBuilderStore } from '@/store/builderStore';
import { Button } from '@/components/ui/Button';
import { SectionData } from '@/types';

interface SectionEditorProps {
  className?: string;
}

export function SectionEditor({ className = '' }: SectionEditorProps) {
  const {
    currentPage,
    selectedSectionId,
    updateSection,
    deleteSection,
    selectSection,
  } = useBuilderStore();

  const selectedSection = currentPage.sections.find(
    (section) => section.id === selectedSectionId
  );

  if (!selectedSection) {
    return (
      <div className={`bg-white border-l border-gray-200 ${className}`}>
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Section Editor</h2>
          <p className="text-sm text-gray-600 mt-1">Select a section to edit its properties</p>
        </div>
        <div className="p-4 text-center text-gray-500">
          <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          <p>No section selected</p>
        </div>
      </div>
    );
  }

  const handleInputChange = (field: keyof SectionData, value: string) => {
    updateSection(selectedSection.id, { [field]: value });
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this section?')) {
      deleteSection(selectedSection.id);
    }
  };

  const handleClose = () => {
    selectSection(null);
  };

  return (
    <div className={`bg-white border-l border-gray-200 ${className}`}>
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Section Editor</h2>
          <p className="text-sm text-gray-600 mt-1 capitalize">
            Editing {selectedSection.type} section
          </p>
        </div>
        <Button variant="ghost" size="sm" onClick={handleClose}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </Button>
      </div>

      <div className="p-4 space-y-6 overflow-auto">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            value={selectedSection.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter title"
          />
        </div>

        {(selectedSection.type === 'hero' || 
          selectedSection.type === 'content' || 
          selectedSection.type === 'cta' ||
          selectedSection.type === 'header' ||
          selectedSection.type === 'footer') && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={selectedSection.description || ''}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter description"
            />
          </div>
        )}

        {(selectedSection.type === 'hero' || selectedSection.type === 'content') && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image URL
            </label>
            <input
              type="url"
              value={selectedSection.imageUrl || ''}
              onChange={(e) => handleInputChange('imageUrl', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://example.com/image.jpg"
            />
          </div>
        )}

        {(selectedSection.type === 'hero' || selectedSection.type === 'cta') && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Button Text
              </label>
              <input
                type="text"
                value={selectedSection.buttonText || ''}
                onChange={(e) => handleInputChange('buttonText', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter button text"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Button URL
              </label>
              <input
                type="url"
                value={selectedSection.buttonUrl || ''}
                onChange={(e) => handleInputChange('buttonUrl', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://example.com"
              />
            </div>
          </>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Background Color
            </label>
            <input
              type="color"
              value={selectedSection.backgroundColor || '#ffffff'}
              onChange={(e) => handleInputChange('backgroundColor', e.target.value)}
              className="w-full h-10 border border-gray-300 rounded-md cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Text Color
            </label>
            <input
              type="color"
              value={selectedSection.textColor || '#000000'}
              onChange={(e) => handleInputChange('textColor', e.target.value)}
              className="w-full h-10 border border-gray-300 rounded-md cursor-pointer"
            />
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <Button
            variant="outline"
            onClick={handleDelete}
            className="w-full text-red-600 border-red-300 hover:bg-red-50"
          >
            Delete Section
          </Button>
        </div>
      </div>
    </div>
  );
}
