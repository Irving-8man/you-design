

//devolver los campos como array de strings
export function stringToArray(input: string): string[]  {
  return input.split(',').map(item => item.trim());
}

//el array como string
export function arrayToString(input: string[]): string {
  return input.join(', ');
}

//key de object a string
export function objectKeysToString(input: { [key: string]: any }): string {
  return Object.keys(input).join(', ');
}

// Para colores
export function generateColorPalette(paletteString: string): { id: number, colorHex: string }[] {
  const colors = paletteString.split(',').map(color => color.trim().toLowerCase());
  return colors.map((colorHex, index) => ({
    id: index + 1,
    colorHex,
  }));
}
