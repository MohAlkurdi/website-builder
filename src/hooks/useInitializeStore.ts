"use client";

import { useEffect } from "react";
import { useBuilderStore } from "@/store/builderStore";

export function useInitializeStore() {
  const { currentPage, resetPage } = useBuilderStore();

  useEffect(() => {
    // Initialize the store with proper IDs only on the client
    if (currentPage.id === "initial") {
      resetPage();
    }
  }, [currentPage.id, resetPage]);
}
