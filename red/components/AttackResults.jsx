import React from "react";

export default function AttackResults({ attack }) {

  if (!attack) return null;

  return (
    <div className="card">

      <h3>Attack Simulation</h3>

      <p>
        <strong>Likely Attack:</strong> {attack.method}
      </p>

      <p>
        <strong>Estimated Crack Time:</strong> {attack.time}
      </p>

      <p>
        <strong>Confidence:</strong> {attack.confidence}
      </p>

    </div>
  );
}