let counter = 0;

export function generateId(): string {
  // Only use crypto.randomUUID on the client side
  if (
    typeof window !== "undefined" &&
    window.crypto &&
    window.crypto.randomUUID
  ) {
    return window.crypto.randomUUID();
  }

  // Deterministic fallback for server-side
  counter++;
  return `section-${counter}`;
}
