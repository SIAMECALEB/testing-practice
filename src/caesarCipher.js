export function caesarCipher(str, shift) {
  const shiftChar = (char) => {
    const isUpper = char >= 'A' && char <= 'Z';
    const isLower = char >= 'a' && char <= 'z';
    if (!isUpper && !isLower) return char;

    const base = isUpper ? 65 : 97;
    const code = ((char.charCodeAt(0) - base + shift) % 26 + 26) % 26 + base;
    return String.fromCharCode(code);
  };

  return str.split('').map(shiftChar).join('');
}
