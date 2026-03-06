import { useState } from "react";

import StrengthMeter from "./StrengthMeter.jsx";
import AttackResults from "./AttackResults.jsx";

import { calculateEntropy } from "../entropy.js";
import { simulateAttack } from "../attacksim/attackSimulator.js";
import { formatTime } from "../attacksim/timeFormatter.js";

export default function PasswordAnalyzer() {

  const [password, setPassword] = useState("");
  const [entropy, setEntropy] = useState(0);
  const [attack, setAttack] = useState(null);

  function analyzePassword(value) {

    setPassword(value);

    if (!value) {
      setEntropy(0);
      setAttack(null);
      return;
    }

    const entropyValue = calculateEntropy(value);
    setEntropy(entropyValue);

    const attackResult = simulateAttack(value);

    setAttack({
      method: attackResult.method,
      time: formatTime(attackResult.seconds),
      confidence: attackResult.confidence
    });
  }

  return (
  <div>

    <div className="card">

      <label>Password</label>

      <input
        className="inputBox"
        type="password"
        placeholder="Enter a password..."
        value={password}
        onChange={(e) => analyzePassword(e.target.value)}
      />

      <StrengthMeter entropy={entropy} />

    </div>

    <AttackResults attack={attack} />

  </div>
  );
}