import NavLinks from '@/app/ui/dashboard/nav-links';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  //Estilos
  const classSide = "flex h-full flex-col border-e border-e-gray-200";
  const classSide__Cont_title = "mb-2 flex h-18 items-end justify-start bg-black p-4";
  const classSide__title = "w-32 text-white md:w-40 text-xl font-semibold";

  return (
    <div className={classSide}>
      {/**Cabecera */}
      <div className={classSide__Cont_title}>
        <h1 className={classSide__title}>
          YouDesign
        </h1>
      </div>

      {/**Secciones */}
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
          <button className="flex h-[48px] border-stone-300 border w-full grow items-center justify-center gap-2 bg-gray-200 p-3 text-sm font-medium hover:bg-accent-700 md:flex-none md:justify-start md:p-2 md:px-3">
            <ArrowLeftOnRectangleIcon className="w-6" />
            <div className="hidden md:block">Cerrar sesión</div>
          </button>
      </div>
    </div>
  );
}
