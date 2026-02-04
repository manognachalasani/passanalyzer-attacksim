import { ATTACK_SPEEDS } from "./attackSpeeds";
import { getKeyspace } from "./charset";

export function estimateBruteForceTime(password, mode = "offline_gpu") {
  const keyspace = getKeyspace(password);
  const speed = ATTACK_SPEEDS[mode];

  return keyspace / speed;
}
