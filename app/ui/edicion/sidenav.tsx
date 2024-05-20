import NavLinks from '@/app/ui/edicion/nav-links';
import ButtonSignout from '@/app/components/button-signout';
import Link from 'next/link';
import { Button } from '@/app/components/button';
import { HomeIcon } from '@heroicons/react/24/outline';

export default function SideNav({ proyectId }: { proyectId: string }) {
  const id = proyectId;
  return (
    <div className="flex h-full flex-col border-e border-e-gray-200">
      {/**Cabecera */}
      <div className="h-18 mb-2 flex items-end justify-start bg-black p-4">
        <h1 className="w-32 text-xl font-semibold text-white md:w-40">
          YouDesign
        </h1>
      </div>

      {/**Secciones */}
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks proyectId={id} />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
        <Button asChild variant="secondary">
          <Link
            href="/dashboard/proyectos"
            className="hover:bg-accent-700 flex h-[48px] w-full grow items-center justify-center gap-2 border border-stone-300 bg-gray-200 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <HomeIcon className="w-6" />
            Regresar
          </Link>
        </Button>
        <ButtonSignout />
      </div>
    </div>
  );
}
