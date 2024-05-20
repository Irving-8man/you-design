import '@/app/ui/global.css';
import SideNav from '@/app/ui/edicion/sidenav';

interface Layaprops {
  children: React.ReactNode;
  params: {
    id: string;
  };
}

export default async function EdicionLayout({ children, params }: Layaprops) {
  const classLayaUserCap =
    'pt-4 pb-5 px-6 border-b flex justify-start gap-[50px]';
  const classLayaUser = 'font-medium';

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-[10rem]">
        <SideNav proyectId={params.id} />
      </div>
      <div className="flex-grow md:overflow-y-auto">
        <div className={classLayaUserCap}>
          <p className={classLayaUser}>autumnLoki</p>
          <p>
            <span className="font-medium">Proyecto:</span> Proyecto 1
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
