"use client";

import { useRef } from "react";
import { useBuilderStore } from "@/store/builderStore";
import { Button } from "@/components/ui/Button";

interface ToolbarProps {
  className?: string;
}

export function Toolbar({ className = "" }: ToolbarProps) {
  const {
    isPreviewMode,
    togglePreviewMode,
    exportConfiguration,
    importConfiguration,
    resetPage,
  } = useBuilderStore();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExport = () => {
    try {
      const config = exportConfiguration();
      const blob = new Blob([config], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `website-${new Date().toISOString().split("T")[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      alert("Failed to export configuration");
    }
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const config = e.target?.result as string;
        importConfiguration(config);
        alert("Configuration imported successfully!");
      } catch (error) {
        alert("Failed to import configuration. Please check the file format.");
      }
    };
    reader.readAsText(file);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleReset = () => {
    if (
      confirm(
        "Are you sure you want to reset the page? This will delete all sections."
      )
    ) {
      resetPage();
    }
  };

  return (
    <div className={`bg-white border-b border-gray-200 px-4 py-3 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <h1 className="text-lg sm:text-xl font-bold text-gray-900">
            Website Builder
          </h1>
          <div className="flex items-center">
            <Button
              variant={isPreviewMode ? "primary" : "outline"}
              size="sm"
              onClick={togglePreviewMode}
              className="text-xs sm:text-sm"
            >
              {isPreviewMode ? "Edit" : "Preview"}
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-2">
          <div className="hidden sm:flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={handleImportClick}>
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                />
              </svg>
              Import
            </Button>

            <Button variant="outline" size="sm" onClick={handleExport}>
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              Export
            </Button>

            <Button variant="outline" size="sm" onClick={handleReset}>
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Reset
            </Button>
          </div>

          <div className="flex sm:hidden items-center space-x-1">
            <Button
              variant="outline"
              size="sm"
              onClick={handleImportClick}
              title="Import"
            >
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
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                />
              </svg>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleExport}
              title="Export"
            >
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
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              title="Reset"
            >
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
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleImport}
        className="hidden"
      />
    </div>
  );
}
