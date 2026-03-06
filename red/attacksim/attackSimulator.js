import { estimateBruteForceTime } from "./bruteforce.js";
import { estimateDictionaryTime } from "./dictionary.js";
import { ATTACK_SPEEDS } from "./attackSpeeds.js";
import { isCommonPassword } from "../detection/passwordUtils.js";
import { detectAttackPatterns } from "../detection/patternDetection.js";

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
