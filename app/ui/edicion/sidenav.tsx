import NavLinks from '@/app/ui/edicion/nav-links';
import ButtonSignout from '@/app/components/button-signout';

export default function SideNav({ proyectId }: { proyectId: string }) {
  const id = proyectId;
  return (
    <div className="flex h-full flex-col border-e border-e-gray-200">
      {/**Cabecera */}
      <div className="mb-2 flex h-18 items-end justify-start bg-black p-4">
        <h1 className="w-32 text-white md:w-40 text-xl font-semibold">
          YouDesign
        </h1>
      </div>

      {/**Secciones */}
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks proyectId={id} />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
        <ButtonSignout/>
      </div>
    </div>
  );
}
