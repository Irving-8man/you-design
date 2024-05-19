import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/app/components/dialog';
import { Button } from '@/app/components/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/app/components/tooltip';
import Footer from '@/app/ui/layout/footer-index';
import CardProyect from '@/app/ui/dashboard/card-proy';
import prisma from '@/lib/db';
import { Task } from '@prisma/client';
import NewPage from './NewPage';

async function totalProyectos() {
  const proyectosCount = await prisma.task.count();
  return proyectosCount;
}

export default async function ProyectosPage({ task, isOpen }: { task?: Task; isOpen: boolean }) {
  const tasks = await prisma.task.findMany();
  const proyectos = await totalProyectos();

  return (
    <div className="px-6 pt-8">
      <div className="flex justify-start">
        <div className="row flex gap-[30px]">
          <Dialog open={isOpen}>
            <DialogTrigger asChild>
              <Button className="gap-3" disabled={proyectos >= 3} >
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
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] p-0">
              <DialogHeader className="p-4">
                <DialogTitle>Crear nuevo</DialogTitle>
                <DialogDescription>
                  Agrega un nuevo proyecto para dar seguimiento.
                </DialogDescription>
                <NewPage task={task} />
              </DialogHeader>
            </DialogContent>
          </Dialog>
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
                  0{proyectos}/03
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p> Proyectos creados </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <section className="my-[50px] min-h-[325px]">
        <div className="grid grid-cols-3 gap-y-[50px]">
          {tasks.map((task) => (
            <CardProyect task={task} key={task.id} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
