export function getCharsetSize(password) {
  let size = 0;

  if (/[a-z]/.test(password)) size += 26;
  if (/[A-Z]/.test(password)) size += 26;
  if (/[0-9]/.test(password)) size += 10;
  if (/[^a-zA-Z0-9]/.test(password)) size += 32;

  return size;
}

export function getKeyspace(password) {
  const charset = getCharsetSize(password);
  return Math.pow(charset, password.length);
}
