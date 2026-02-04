// checking for year patterns from 1950 to 2030
export function hasYearPattern(password) {
  const yearRegex = /(19[5-9]\d|20[0-2]\d|2030)/;
  return yearRegex.test(password);
}

// checking for name-like patterns
export function hasNameLikePattern(password) {
  const nameRegex = /[A-Z][a-z]{3,}/;
  return nameRegex.test(password);
}

// detecting human-like patterns
export function detectHumanPatterns(password) {
  return {
    hasYear: hasYearPattern(password),
    hasNameLike: hasNameLikePattern(password)
  };
}

// checking for sequential characters
function isSequential(str) {
  for (let i = 0; i < str.length - 2; i++) {
    const first = str.charCodeAt(i);
    const second = str.charCodeAt(i + 1);
    const third = str.charCodeAt(i + 2);

    if (
      second === first + 1 &&
      third === second + 1
    ) return true;

    if (
      second === first - 1 &&
      third === second - 1
    ) return true;
  }

  return false;
}

// checking for sequential patterns
const keyboardPatterns = [
  "qwerty",
  "asdf",
  "zxcv",
  "12345",
  "password"
];

export function hasKeyboardPattern(password) {
  const lower = password.toLowerCase();

  return keyboardPatterns.some(pattern =>
    lower.includes(pattern)
  );
}

// detecting attack patterns
export function detectAttackPatterns(password) {
  return {
    hasYear: hasYearPattern(password),
    hasNameLike: hasNameLikePattern(password),
    hasSequential: isSequential(password),
    hasKeyboard: hasKeyboardPattern(password)
  };
}