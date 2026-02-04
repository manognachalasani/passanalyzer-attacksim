export function formatTime(seconds) {
  if (seconds < 60) return "Instant";

  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.round(minutes)} minutes`;

  const hours = minutes / 60;
  if (hours < 24) return `${Math.round(hours)} hours`;

  const days = hours / 24;
  if (days < 365) return `${Math.round(days)} days`;

  const years = days / 365;
  return `${years.toFixed(1)} years`;
}
