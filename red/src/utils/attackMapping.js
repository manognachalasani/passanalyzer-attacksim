export function mapAttackCategory(password) {
  if (isCommonPassword(password)) {
    return "credential_stuffing";
  }

  const patterns = detectAttackPatterns(password);

  if (patterns.hasNameLike || patterns.hasYear) {
    return "dictionary_attack";
  }

  if (patterns.hasSequential || patterns.hasKeyboard) {
    return "pattern_attack";
  }

  return "bruteforce";
}
