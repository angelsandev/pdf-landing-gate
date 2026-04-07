// src/utils/validators.ts

/**
 * Valida si un string tiene formato de email válido
 */
export function isValidEmail(email: string): boolean {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(email);
}
