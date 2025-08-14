export interface SectionData {
  id: string;
  type: "header" | "hero" | "footer" | "content" | "cta";
  title: string;
  description?: string;
  imageUrl?: string;
  buttonText?: string;
  buttonUrl?: string;
  backgroundColor?: string;
  textColor?: string;
}

export interface PageConfiguration {
  id: string;
  name: string;
  sections: SectionData[];
  createdAt: string;
  updatedAt: string;
}

export interface BuilderState {
  currentPage: PageConfiguration;
  selectedSectionId: string | null;
  isPreviewMode: boolean;
  isDragging: boolean;
}

export interface SectionTemplate {
  id: string;
  type: SectionData["type"];
  name: string;
  description: string;
  icon: string;
  defaultData: Omit<SectionData, "id">;
}

export interface DragResult {
  draggableId: string;
  type: string;
  source: {
    droppableId: string;
    index: number;
  };
  destination?: {
    droppableId: string;
    index: number;
  } | null;
}
