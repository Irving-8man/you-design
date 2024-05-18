//import { getServerSession } from 'next-auth'
//import ButtonSignout from '@/app/components/button-signout'
import Footer from '@/app/ui/layout/footer-index';
import { Button } from '@/app/components/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/app/components/tooltip';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/app/components/dialog';
import { Input } from '@/app/components/input';
import { Label } from '@/app/components/label';
import { Textarea } from '@/app/components/textArea';

import CardProyect from '@/app/ui/dashboard/card-proy';
import prisma from '@/lib/db';
import { CreateTask, updateTask } from '@/app/actions/tasks-actions';
import { Task } from '@prisma/client';

async function totalProyectos() {
  return 1;
}

export default async function ProyectosPage({task}: {task:Task}) {
  const functionAction = task?.id ? updateTask : CreateTask;
  //hooks
  //const session = await getServerSession()
  const tasks = await prisma.task.findMany()
  console.log(tasks)

  let proyectos = await totalProyectos();

  return (
    <div className="px-6 pt-8">
      {/**Seccion superior*/}
      <div className="flex justify-start">
        <div className="row flex gap-[30px]">
        <form action={functionAction}>
          <input type="hidden" name="id" value={task?.id} />
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-3">
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
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Crear nuevo</DialogTitle>
                <DialogDescription>
                  Agrega un nuevo proyecto para dar seguimiento.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="nowrap flex flex-col items-start justify-start gap-4">
                  <Label htmlFor="nombre" className="text-right">
                    Nombre
                  </Label>
                  <Input name="nombre" id="nombre" placeholder="Nombre de tu proyecto" defaultValue={task?.nombre} />
                </div>
                <div className="nowrap flex flex-col items-start justify-start gap-4">
                  <Label htmlFor="descripcion" className="text-right">
                    Descripción
                    <span className="text-zinc-400"> (Opcional)</span>
                  </Label>
                  <Textarea name="descripcion" id="descripcion" placeholder="Descripcion de la tarea" 
                   defaultValue={task?.descripcion || ""}
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Crear</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          </form>
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
                <p> Proyectos creados</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      {/**Seccion de proyectos */}
      <section className="nowrap my-[50px] grid min-h-[325px] grid-cols-3 ">
      <div className="grid grid-cols-3 gap-4">
        {tasks.map(task => (
        <CardProyect task= {task} key={task.id} />
        ))}
      </div>
      </section>
      <Footer />
    </div>
  );
}








