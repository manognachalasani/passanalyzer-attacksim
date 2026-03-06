export function estimateDictionaryTime(password, speed) {
  const assumedGuesses = 5_000_000; // 5 million

  return assumedGuesses / speed;
}
