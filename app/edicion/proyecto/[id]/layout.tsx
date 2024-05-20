import '@/app/ui/global.css';
import SideNav from '@/app/ui/edicion/sidenav';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getNameProyect} from "@/app/server/query/edicionIndex";

interface Layaprops {
  children: React.ReactNode;
  params: {
    id: string;
  };
}

export default async function EdicionLayout({ children, params }: Layaprops) {
  const session = await getServerSession(authOptions);
  const data = await getNameProyect(params.id);

  if (!session) return null;


  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-[10rem]">
        <SideNav proyectId={params.id} />
      </div>
      <div className="flex-grow md:overflow-y-auto">
        <div className='pt-4 pb-5 px-6 border-b flex justify-start gap-[50px]'>
          <p className='font-medium'>{session.user.nombreUsuario}</p>
          <p>
            <span className='font-medium'>Proyecto:</span> {data?.nombreProyecto}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
