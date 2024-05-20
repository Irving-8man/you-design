import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ContenColor from '@/app/ui/colors/Content';
import { getDetailsColors } from '@/app/server/query/tipoIndex';
import { generateColorPalette } from '@/app/lib/utilsCampos';

export default async function Page({ params }: { params: { id: string } }) {
  //recuperacion de sesion y sus datos de proyecto
  const session = await getServerSession(authOptions);
  const data = await getDetailsColors(params.id);

  if (!session) return null;
  if (!data) {
    return <div>Error</div>;
  }

  const paletaColors = generateColorPalette(data.paleta);

  return <ContenColor paleta={paletaColors} />;
}
