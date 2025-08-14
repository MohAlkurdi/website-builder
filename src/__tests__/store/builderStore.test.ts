import { renderHook, act } from '@testing-library/react';
import { useBuilderStore } from '@/store/builderStore';
import { sectionTemplates } from '@/data/sectionTemplates';

describe('BuilderStore', () => {
  beforeEach(() => {
    useBuilderStore.getState().resetPage();
  });

  it('should initialize with default state', () => {
    const { result } = renderHook(() => useBuilderStore());
    
    expect(result.current.currentPage.sections).toHaveLength(0);
    expect(result.current.selectedSectionId).toBeNull();
    expect(result.current.isPreviewMode).toBe(false);
    expect(result.current.isDragging).toBe(false);
  });

  it('should add a section', () => {
    const { result } = renderHook(() => useBuilderStore());
    const template = sectionTemplates[0];

    act(() => {
      result.current.addSection(template);
    });

    expect(result.current.currentPage.sections).toHaveLength(1);
    expect(result.current.currentPage.sections[0].type).toBe(template.type);
    expect(result.current.selectedSectionId).toBe(result.current.currentPage.sections[0].id);
  });

  it('should update a section', () => {
    const { result } = renderHook(() => useBuilderStore());
    const template = sectionTemplates[0];

    act(() => {
      result.current.addSection(template);
    });

    const sectionId = result.current.currentPage.sections[0].id;
    const newTitle = 'Updated Title';

    act(() => {
      result.current.updateSection(sectionId, { title: newTitle });
    });

    expect(result.current.currentPage.sections[0].title).toBe(newTitle);
  });

  it('should delete a section', () => {
    const { result } = renderHook(() => useBuilderStore());
    const template = sectionTemplates[0];

    act(() => {
      result.current.addSection(template);
    });

    const sectionId = result.current.currentPage.sections[0].id;

    act(() => {
      result.current.deleteSection(sectionId);
    });

    expect(result.current.currentPage.sections).toHaveLength(0);
    expect(result.current.selectedSectionId).toBeNull();
  });

  it('should reorder sections', () => {
    const { result } = renderHook(() => useBuilderStore());

    act(() => {
      result.current.addSection(sectionTemplates[0]);
      result.current.addSection(sectionTemplates[1]);
    });

    const firstSectionId = result.current.currentPage.sections[0].id;
    const secondSectionId = result.current.currentPage.sections[1].id;

    act(() => {
      result.current.reorderSections(0, 1);
    });

    expect(result.current.currentPage.sections[0].id).toBe(secondSectionId);
    expect(result.current.currentPage.sections[1].id).toBe(firstSectionId);
  });

  it('should toggle preview mode', () => {
    const { result } = renderHook(() => useBuilderStore());

    act(() => {
      result.current.togglePreviewMode();
    });

    expect(result.current.isPreviewMode).toBe(true);

    act(() => {
      result.current.togglePreviewMode();
    });

    expect(result.current.isPreviewMode).toBe(false);
  });

  it('should export and import configuration', () => {
    const { result } = renderHook(() => useBuilderStore());

    act(() => {
      result.current.addSection(sectionTemplates[0]);
    });

    const config = result.current.exportConfiguration();
    expect(config).toContain(sectionTemplates[0].type);

    act(() => {
      result.current.resetPage();
    });

    expect(result.current.currentPage.sections).toHaveLength(0);

    act(() => {
      result.current.importConfiguration(config);
    });

    expect(result.current.currentPage.sections).toHaveLength(1);
    expect(result.current.currentPage.sections[0].type).toBe(sectionTemplates[0].type);
  });

  it('should handle invalid import configuration', () => {
    const { result } = renderHook(() => useBuilderStore());

    expect(() => {
      act(() => {
        result.current.importConfiguration('invalid json');
      });
    }).toThrow('Invalid configuration format');
  });
});
