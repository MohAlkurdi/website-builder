"use client";

import { useState, useEffect } from "react";
import { useBuilderStore } from "@/store/builderStore";
import { useInitializeStore } from "@/hooks/useInitializeStore";
import { Toolbar } from "./Toolbar";
import { SectionLibrary } from "./SectionLibrary";
import { PreviewArea } from "./PreviewArea";
import { SectionEditor } from "./SectionEditor";
import { Button } from "@/components/ui/Button";

export function ClientBuilderLayout() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useInitializeStore();
  const { isPreviewMode, selectedSectionId } = useBuilderStore();
  const [showSidebar, setShowSidebar] = useState(false);
  const [sidebarContent, setSidebarContent] = useState<"library" | "editor">(
    "library"
  );

  const handleShowLibrary = () => {
    setSidebarContent("library");
    setShowSidebar(true);
  };

  const handleShowEditor = () => {
    setSidebarContent("editor");
    setShowSidebar(true);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  if (!isClient) {
    return (
      <>
        <div className="bg-white border-b border-gray-200 px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg sm:text-xl font-bold text-gray-900">
              Website Builder
            </h1>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading Website Builder...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Toolbar />

      <div className="flex-1 flex overflow-hidden relative">
        <div className="hidden lg:flex flex-1 overflow-hidden">
          {!isPreviewMode && <SectionLibrary className="w-80 flex-shrink-0" />}

          <PreviewArea className="flex-1" />

          {!isPreviewMode && selectedSectionId && (
            <SectionEditor className="w-80 flex-shrink-0" />
          )}
        </div>

        <div className="flex lg:hidden flex-1 overflow-hidden">
          <PreviewArea className="flex-1" />
        </div>

        {showSidebar && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            <div
              className="flex-1 bg-black bg-opacity-50"
              onClick={closeSidebar}
            />
            <div className="w-80 bg-white shadow-lg animate-slide-in">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="font-semibold">
                  {sidebarContent === "library"
                    ? "Section Library"
                    : "Section Editor"}
                </h3>
                <Button variant="ghost" size="sm" onClick={closeSidebar}>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </Button>
              </div>
              {sidebarContent === "library" ? (
                <SectionLibrary className="h-full" />
              ) : (
                selectedSectionId && <SectionEditor className="h-full" />
              )}
            </div>
          </div>
        )}

        {!isPreviewMode && (
          <div className="lg:hidden fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
            <Button
              onClick={handleShowLibrary}
              className="w-14 h-14 rounded-full shadow-lg"
              title="Add Section"
            >
              <svg
                className="w-6 h-6"
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
            </Button>

            {selectedSectionId && (
              <Button
                onClick={handleShowEditor}
                variant="secondary"
                className="w-14 h-14 rounded-full shadow-lg"
                title="Edit Section"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
