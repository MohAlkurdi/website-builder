import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { SectionData, PageConfiguration, BuilderState, SectionTemplate } from '@/types';

interface BuilderStore extends BuilderState {
  addSection: (template: SectionTemplate) => void;
  updateSection: (id: string, updates: Partial<SectionData>) => void;
  deleteSection: (id: string) => void;
  reorderSections: (startIndex: number, endIndex: number) => void;
  selectSection: (id: string | null) => void;
  togglePreviewMode: () => void;
  setDragging: (isDragging: boolean) => void;
  exportConfiguration: () => string;
  importConfiguration: (config: string) => void;
  resetPage: () => void;
}

const createDefaultPage = (): PageConfiguration => ({
  id: crypto.randomUUID(),
  name: 'Untitled Page',
  sections: [],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
});

export const useBuilderStore = create<BuilderStore>()(
  subscribeWithSelector((set, get) => ({
    currentPage: createDefaultPage(),
    selectedSectionId: null,
    isPreviewMode: false,
    isDragging: false,

    addSection: (template) => {
      const newSection: SectionData = {
        ...template.defaultData,
        id: crypto.randomUUID(),
      };
      
      set((state) => ({
        currentPage: {
          ...state.currentPage,
          sections: [...state.currentPage.sections, newSection],
          updatedAt: new Date().toISOString(),
        },
        selectedSectionId: newSection.id,
      }));
    },

    updateSection: (id, updates) => {
      set((state) => ({
        currentPage: {
          ...state.currentPage,
          sections: state.currentPage.sections.map((section) =>
            section.id === id ? { ...section, ...updates } : section
          ),
          updatedAt: new Date().toISOString(),
        },
      }));
    },

    deleteSection: (id) => {
      set((state) => ({
        currentPage: {
          ...state.currentPage,
          sections: state.currentPage.sections.filter((section) => section.id !== id),
          updatedAt: new Date().toISOString(),
        },
        selectedSectionId: state.selectedSectionId === id ? null : state.selectedSectionId,
      }));
    },

    reorderSections: (startIndex, endIndex) => {
      set((state) => {
        const sections = [...state.currentPage.sections];
        const [reorderedItem] = sections.splice(startIndex, 1);
        sections.splice(endIndex, 0, reorderedItem);

        return {
          currentPage: {
            ...state.currentPage,
            sections,
            updatedAt: new Date().toISOString(),
          },
        };
      });
    },

    selectSection: (id) => {
      set({ selectedSectionId: id });
    },

    togglePreviewMode: () => {
      set((state) => ({
        isPreviewMode: !state.isPreviewMode,
        selectedSectionId: state.isPreviewMode ? state.selectedSectionId : null,
      }));
    },

    setDragging: (isDragging) => {
      set({ isDragging });
    },

    exportConfiguration: () => {
      const { currentPage } = get();
      return JSON.stringify(currentPage, null, 2);
    },

    importConfiguration: (config) => {
      try {
        const pageConfig: PageConfiguration = JSON.parse(config);
        set({
          currentPage: {
            ...pageConfig,
            updatedAt: new Date().toISOString(),
          },
          selectedSectionId: null,
        });
      } catch (error) {
        console.error('Failed to import configuration:', error);
        throw new Error('Invalid configuration format');
      }
    },

    resetPage: () => {
      set({
        currentPage: createDefaultPage(),
        selectedSectionId: null,
        isPreviewMode: false,
      });
    },
  }))
);
