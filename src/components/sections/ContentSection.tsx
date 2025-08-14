"use client";

import { SectionData } from "@/types";
import Image from "next/image";

interface ContentSectionProps {
  section: SectionData;
  isSelected?: boolean;
  isPreviewMode?: boolean;
  onClick?: () => void;
}

export function ContentSection({ section }: ContentSectionProps) {
  return (
    <section
      className="w-full py-16 px-6"
      style={{
        backgroundColor: section.backgroundColor || "#ffffff",
        color: section.textColor || "#374151",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {section.imageUrl && (
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src={section.imageUrl}
                alt={section.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">{section.title}</h2>
            {section.description && (
              <p className="text-lg leading-relaxed opacity-90">
                {section.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
