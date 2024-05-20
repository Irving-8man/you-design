import CardAcces from '@/app/ui/edicion/cardAcces';
import CardTipog from '@/app/ui/edicion/cardTipog';
import CardColors from '@/app/ui/edicion/cardColors';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getDetailsProyect } from '@/app/server/query/edicionIndex';
import { stringToArray } from '@/app/lib/utilsCampos';

export default async function Page({ params }: { params: { id: string } }) {
  //recuperacion de sesion y sus datos de proyecto
  const session = await getServerSession(authOptions);
  const data = await getDetailsProyect(params.id);
  const totalCount = 30;
  let completionPercentage = 0;

  if (!session) return null;
  if (!data) {
    return <div>Error</div>;
  }

  const pautasAcces = stringToArray(data.pautasCheck);
  if (pautasAcces.length === 1 && pautasAcces[0] === '') {
    completionPercentage = 0;
  } else {
    const completeAcces = pautasAcces.length;
    completionPercentage = parseFloat(
      ((completeAcces / totalCount) * 100).toFixed(2),
    );
  }

  const paleta = stringToArray(data.paleta);

  return (
    <div className="px-6 pt-8">
      <h1 className="text-[40px] font-medium">{data?.nombreProyecto}</h1>
      <div className="nowrap mt-[60px] flex flex-row justify-between">
        <CardAcces porcen={completionPercentage} />
        <CardTipog tipografia={data?.fuenteBase} />
        <CardColors colors={paleta} />
      </div>
    </div>
  );
}
