import NavLinks from '@/app/ui/dashboard/nav-links';
import ButtonSignout from '@/app/components/button-signout';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function SideNav() {
  const session = await getServerSession(authOptions);
  console.log(session);
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
        <ButtonSignout/>
      </div>
    </div>
  );
}
