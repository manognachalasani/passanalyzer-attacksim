import { getCharsetSize } from "./utils/charset.js";

export function calculateEntropy(password) {
  const charset = getCharsetSize(password);
  return Math.log2(Math.pow(charset, password.length));
}

// Used by Red Team to penalize
export function calculateEffectiveEntropy(password, penaltyBits = 0) {
  return calculateEntropy(password) - penaltyBits;
}
