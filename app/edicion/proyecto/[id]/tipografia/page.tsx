import BaseTipos from '@/app/ui/tipogra/BaseTipos';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getDetailsTipogra } from '@/app/server/query/tipoIndex';

export default async function Page({ params }: { params: { id: string } }) {
  //recuperacion de sesion y sus datos de proyecto
  const session = await getServerSession(authOptions);
  const data = await getDetailsTipogra(params.id);

  if (!session) return null;
  if (!data) {
    return <div>Error</div>;
  }

  return (
    <div className="px-6 pb-8 pt-8">
      <div className="nowrap flex flex-row justify-between">
        <div className="row flex gap-[40px]">
          <h1 className="text-[30px] font-bold">Tipografía</h1>
          <p className="max-w-[50ch] text-[16px] text-zinc-600 ">
            Resguarda tus tokens de tipografía y copia las recomendaciones de
            tamaños y estilos basados en Material UI de Google como CSS.
          </p>
        </div>
      </div>
      <BaseTipos
        tipografia={data.fuenteBase}
        base={data.size}
        Ratio={data.ratio}
        interlineado={data.interlineado}
        idProyecto={params.id}
      />
    </div>
  );
}
