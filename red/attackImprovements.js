export function suggestAttackImprovements(auditResults) {
  const suggestions = [];

  if (auditResults.uniqueLengths === 1) {
    suggestions.push("Use fixed-length brute-force masks");
  }

  if (auditResults.uniqueCharsets === 1) {
    suggestions.push("Reduce keyspace based on known generator constraints");
  }

  return suggestions;
}
