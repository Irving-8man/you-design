import responseTipografias from '@/lib/fontsResults/webfonts.json';

export async function GET() {
  const GOOGLE_FONTS_API_URL =
    'https://www.googleapis.com/webfonts/v1/webfonts';
  const KEY = process.env.KEY_FONT;

  try {
    const res = await fetch(
      `${GOOGLE_FONTS_API_URL}?fields=items(family)&key=${KEY}`,
    );
    if (!res.ok) {
      throw new Error('Fallo al obtener las fuentes de Google');
    } else {
      const data = await res.json();
      return Response.json(data);
    }
  } catch (error) {
    console.error('fallo el fetch');
    return Response.json(responseTipografias);
  }
}
