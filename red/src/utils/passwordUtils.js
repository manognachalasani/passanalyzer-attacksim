import { commonPasswords } from "./commonpasswords";

// normalizing input
export function normalizePassword(password) {
  return password.trim().toLowerCase();
}

// checking if password is common / leaked
export function isCommonPassword(password) {
  const normalized = normalizePassword(password);
  return commonPasswords.has(normalized);
}

