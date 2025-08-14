import { SectionTemplate } from "@/types";

export const sectionTemplates: SectionTemplate[] = [
  {
    id: "header-template",
    type: "header",
    name: "Header",
    description: "Navigation header with logo and menu",
    icon: "Layout",
    defaultData: {
      type: "header",
      title: "Your Logo",
      description: "Home | About | Services | Contact",
      backgroundColor: "#ffffff",
      textColor: "#000000",
    },
  },
  {
    id: "hero-template",
    type: "hero",
    name: "Hero Section",
    description: "Eye-catching hero section with call-to-action",
    icon: "Star",
    defaultData: {
      type: "hero",
      title: "Welcome to Our Amazing Website",
      description:
        "Discover the perfect solution for your needs with our innovative approach and exceptional service.",
      buttonText: "Get Started",
      buttonUrl: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      backgroundColor: "#f8fafc",
      textColor: "#1e293b",
    },
  },
  {
    id: "content-template",
    type: "content",
    name: "Content Section",
    description: "General content section with text and image",
    icon: "FileText",
    defaultData: {
      type: "content",
      title: "About Our Services",
      description:
        "We provide comprehensive solutions tailored to meet your specific requirements. Our team of experts is dedicated to delivering exceptional results that exceed your expectations.",
      imageUrl:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      backgroundColor: "#ffffff",
      textColor: "#374151",
    },
  },
  {
    id: "cta-template",
    type: "cta",
    name: "Call to Action",
    description: "Compelling call-to-action section",
    icon: "Zap",
    defaultData: {
      type: "cta",
      title: "Ready to Get Started?",
      description:
        "Join thousands of satisfied customers who have transformed their business with our solutions.",
      buttonText: "Start Your Journey",
      buttonUrl: "#",
      backgroundColor: "#3b82f6",
      textColor: "#ffffff",
    },
  },
  {
    id: "footer-template",
    type: "footer",
    name: "Footer",
    description: "Website footer with links and information",
    icon: "Layers",
    defaultData: {
      type: "footer",
      title: "Your Company",
      description:
        "© 2024 Your Company. All rights reserved. | Privacy Policy | Terms of Service",
      backgroundColor: "#1f2937",
      textColor: "#ffffff",
    },
  },
];
