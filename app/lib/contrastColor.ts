/**
 * Recuperacion de los datos de Hexa
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (r, g, b) => {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Calculo de limunisidad
 */
function luminance(r: number, g: number, b: number): number {
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

/**
 * Calculo de ratio entre los colores
 */
export function calcularRatio(color1: string, color2: string): number {
  const color1rgb = hexToRgb(color1);
  const color2rgb = hexToRgb(color2);

  if (!color1rgb || !color2rgb) return 0;

  const color1luminance = luminance(color1rgb.r, color1rgb.g, color1rgb.b);
  const color2luminance = luminance(color2rgb.r, color2rgb.g, color2rgb.b);

  return color1luminance > color2luminance
    ? (color2luminance + 0.05) / (color1luminance + 0.05)
    : (color1luminance + 0.05) / (color2luminance + 0.05);
}
