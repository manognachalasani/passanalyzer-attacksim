import React from "react";

export default function StrengthMeter({ entropy }) {

  let percent = Math.min(entropy * 1.5, 100);

  let color = "#ff5c8a"; // weak

  if (entropy > 60) color = "#00ffa6";
  else if (entropy > 40) color = "#7aa2ff";
  else if (entropy > 20) color = "#ffd166";

  return (
    <div>
      <div className="strengthBar">
        <div
          className="strengthFill"
          style={{
            width: `${percent}%`,
            background: color
          }}
        />
      </div>

      <div className="result">
        Entropy: {entropy.toFixed(2)} bits
      </div>
    </div>
  );
}