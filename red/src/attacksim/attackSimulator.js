import { estimateBruteForceTime } from "./bruteforce";
import { estimateDictionaryTime } from "./dictionary";
import { ATTACK_SPEEDS } from "./attackSpeeds";
import { isCommonPassword } from "./passwordUtils";
import { detectAttackPatterns } from "./patternDetection";

export function simulateAttack(password) {
  if (isCommonPassword(password)) {
    return {
      method: "credential_stuffing",
      seconds: 1,
      confidence: "very_high"
    };
  }

  const patterns = detectAttackPatterns(password);

  if (patterns.hasYear || patterns.hasNameLike) {
    return {
      method: "dictionary",
      seconds: estimateDictionaryTime(password, ATTACK_SPEEDS.offline_gpu),
      confidence: "high"
    };
  }

  return {
    method: "bruteforce",
    seconds: estimateBruteForceTime(password, "offline_gpu"),
    confidence: "medium"
  };
}
