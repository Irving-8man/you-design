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

async function totalProyectos() {
  return 1;
}

export default async function ProyectosPage() {
  //hooks
  //const session = await getServerSession()

  let proyectos = await totalProyectos();

  return (
    <div className="px-6 pt-8">
      {/**Seccion superior*/}
      <div className="flex justify-start">
        <div className="row flex gap-[30px]">
          <Dialog>
            <DialogTrigger asChild>
              <Button> Nuevo proyecto</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Crear nuevo </DialogTitle>
                <DialogDescription>
                  Agrega un nuevo proyecto para dar seguimiento.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="nowrap flex flex-col items-start justify-start gap-4">
                  <Label htmlFor="name" className="text-right">
                    Nombre
                  </Label>
                  <Input id="name" value="" className="col-span-3" />
                </div>
                <div className="nowrap flex flex-col items-start justify-start gap-4">
                  <Label htmlFor="username" className="text-right">
                    Descripción
                    <span className="text-zinc-400"> (Opcional)</span>
                  </Label>
                  <Textarea id="username" value="" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Cancelar
                  </Button>
                </DialogClose>
                <Button type="submit">Crear</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          {/**cuantos te quedan */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">0{proyectos}/03</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Proyectos creados</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      {/**Seccion de proyectos */}
      <section className="border min-h-[325px] my-[50px] flex nowrap justify-between">
        <CardProyect/>
        <CardProyect/>
        <CardProyect/>
      </section>
      <Footer />
    </div>
  );
}
