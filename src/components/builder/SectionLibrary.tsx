"use client";

import { sectionTemplates } from "@/data/sectionTemplates";
import { useBuilderStore } from "@/store/builderStore";
import { Button } from "@/components/ui/Button";
import { SectionTemplate } from "@/types";

interface SectionLibraryProps {
  className?: string;
}

export function SectionLibrary({ className = "" }: SectionLibraryProps) {
  const addSection = useBuilderStore((state) => state.addSection);

  const handleAddSection = (template: SectionTemplate) => {
    addSection(template);
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
            />
          </svg>
        );
      case "Star":
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        );
      case "FileText":
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        );
      case "Zap":
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        );
      case "Layers":
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7.875 14.25l1.214 1.942a2 2 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2 2 0 011.872 1.332l.17.518a2 2 0 001.872 1.332H21.59M4 19h16"
            />
          </svg>
        );
      default:
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        );
    }
  };

  return (
    <div className={`bg-white border-r border-gray-200 ${className}`}>
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Section Library</h2>
        <p className="text-sm text-gray-600 mt-1">
          Click to add sections to your page
        </p>
      </div>

      <div className="p-4 space-y-3">
        {sectionTemplates.map((template, index) => (
          <div
            key={template.id}
            className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md hover:scale-[1.02] transition-all duration-200 animate-slide-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 p-2 bg-blue-50 rounded-md text-blue-600 transition-colors duration-200 group-hover:bg-blue-100">
                {getIconComponent(template.icon)}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 mb-1">
                  {template.name}
                </h3>
                <p className="text-xs text-gray-600 mb-3">
                  {template.description}
                </p>
                <Button
                  size="sm"
                  onClick={() => handleAddSection(template)}
                  className="w-full transform hover:scale-105 transition-transform duration-150"
                >
                  Add Section
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
