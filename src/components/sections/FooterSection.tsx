"use client";

import { SectionData } from "@/types";

interface FooterSectionProps {
  section: SectionData;
  isSelected?: boolean;
  isPreviewMode?: boolean;
  onClick?: () => void;
}

export function FooterSection({ section }: FooterSectionProps) {
  const footerLinks = section.description?.split(" | ") || [];
  const copyrightText = footerLinks[0] || "";
  const links = footerLinks.slice(1);

  return (
    <footer
      className="w-full py-12 px-6"
      style={{
        backgroundColor: section.backgroundColor || "#1f2937",
        color: section.textColor || "#ffffff",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{section.title}</h3>
            <p className="text-sm opacity-80">{copyrightText}</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Services
              </a>
              <a
                href="#"
                className="block text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <div className="space-y-2">
              {links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-sm opacity-80 hover:opacity-100 transition-opacity"
                  onClick={(e) => e.preventDefault()}
                >
                  {link.trim()}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
