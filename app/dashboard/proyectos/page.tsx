import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getLimitAndNumProyectsByUser } from '@/app/server/query/index';
import Footer from '@/app/ui/layout/footer-index';
import { Button } from '@/app/components/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/app/components/tooltip';
import CardProyect from '@/app/ui/dashboard/card-proy';
import { CreateProyect } from '@/app/ui/dashboard/create-proyect';

export default async function ProyectosPage() {
  const session = await getServerSession(authOptions);

  const LISTPROYECTOS = [
    { id: 1, nombre: 'ARETEO', descripcion: 'Uno proyecto mas1' },
    { id: 2, nombre: 'CRESPO', descripcion: 'Uno proyecto mas2' },
    { id: 3, nombre: 'SSASA', descripcion: 'Uno proyecto mas2' },
  ];

  const data = await getLimitAndNumProyectsByUser();

  return (
    <div className="px-6 pt-8">
      {/**Seccion superior*/}
      <div className="flex justify-start">
        <div className="row flex gap-[30px]">
          {session !== null ? (
            <CreateProyect idUsuario={session.user.id}>
              {data?.numProyects !== undefined && (
                <Button
                  className="gap-3"
                  disabled={data?.limit < data?.numProyects}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </div>
                  Nuevo proyecto
                </Button>
              )}
            </CreateProyect>
          ) : (
            <div>Error</div>
          )}
          {/**cuantos te quedan */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="gap-3">
                  {' '}
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                      />
                    </svg>
                  </div>{' '}
                  0{data?.numProyects}/0{data?.limit}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p> Proyectos creados</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      {/**Seccion de proyectos */}
      <section className="nowrap my-[50px] grid min-h-[325px] grid-cols-3 ">
        {data?.proyectos.map((proyecto) => (
          <CardProyect
            key={proyecto.id}
            idProyect={proyecto.id}
            nombre={proyecto.nombreProyecto}
            descripcion={proyecto.descripcion}
            idUser={session.user.id}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}
