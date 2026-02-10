import { generateMultiplePasswords } from "../blueteam/passwordGenerator";
import { getCharsetSize } from "../utils/charset";

export function auditGenerator(samples = 100) {
  const passwords = generateMultiplePasswords(samples);

  const lengths = new Set<number>();
  const charsets = new Set<number>();
  let symbolOnlySet = new Set<string>();

  passwords.forEach(pwd => {
    lengths.add(pwd.length);
    charsets.add(getCharsetSize(pwd));

    pwd.split('').forEach(c => {
      if (/[^a-zA-Z0-9]/.test(c)) {
        symbolOnlySet.add(c);
      }
    });
  });

  return {
    samples,
    uniqueLengths: lengths.size,
    uniqueCharsets: charsets.size,
    symbolVariety: symbolOnlySet.size
  };
}
