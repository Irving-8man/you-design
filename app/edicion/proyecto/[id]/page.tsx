import CardAcces from "@/app/ui/edicion/cardAcces";
import CardTipog from "@/app/ui/edicion/cardTipog";
import CardColors from "@/app/ui/edicion/cardColors";
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';



export default async function Page({ params }: { params: { id: string } }) {
    //recuperacion de sesion y sus proyectos
    const session = await getServerSession(authOptions);
    const data = await getLimitAndNumProyectsByUser();
    
    if (!session) return null;
  
  return(
    <div className="px-6 pt-8">
      <h1 className="text-[40px] font-medium">Proyecto {params.id}</h1>
      <div className="flex flex-row nowrap justify-between mt-[60px]">
        <CardAcces porcen={0}/>
        <CardTipog/>
        <CardColors/>
      </div>
    </div>
  );
}