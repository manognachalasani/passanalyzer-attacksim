import { ATTACK_SPEEDS } from "./attackSpeeds.js";
import { getKeyspace } from "../utils/charset.js";

export function estimateBruteForceTime(password, mode = "offline_gpu") {
  const keyspace = getKeyspace(password);
  const speed = ATTACK_SPEEDS[mode];

  return keyspace / speed;
}
