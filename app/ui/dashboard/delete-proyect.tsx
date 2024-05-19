'use client';

import type { z } from 'zod';
import { useState, type ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/app/components/button';
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
import {
  Form,
} from '@/app/components/form';
import { DeleteProyectSchema } from '@/app/lib/formsZod';
import { useToast } from '@/app/components/use-toast';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

interface DeleteProyectProps {
  trigger: ReactNode;
  idProyect: string;
  nombre: string;
  idUser:string;
}

export default function DeleteProyect(props: DeleteProyectProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const { toast } = useToast();

  const form = useForm<z.infer<typeof DeleteProyectSchema>>({
    resolver: zodResolver(DeleteProyectSchema),
    defaultValues: {
      idProyect: props.idProyect,
      idUser: props.idUser,
    },
  });

  const onSubmit = async (values: z.infer<typeof DeleteProyectSchema>) => {
    
    try {
      setLoading(true);
      const res = await fetch(`/api/proyectos`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idProyect: values.idProyect,
          idUser: values.idUser,
        }),
      });
      if (res.ok) {
        router.refresh();
        form.reset();
        setOpen(false);
        toast({
          title: 'Proyecto Borrado',
        });
      } else {
        setLoading(false);
        const errorData = await res.json();
        toast({
          variant: 'destructive',
          title: 'Oh no!, algo falló',
          description:
            errorData.message || 'Hubo un problema con borrar el proyecto',
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Oh no!, Fallo borrar proyecto',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{props.trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[350px]">
        <DialogHeader>
          <DialogTitle className="text-zinc-700 text-center">Borrar <span className="font-medium">{props.nombre}</span> </DialogTitle>
          <DialogDescription className="text-red-500">
            Esta por borrar este proyecto con todos sus seguimientos.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost" disabled={loading}>
                  Cancelar
                </Button>
              </DialogClose>
              <Button
                type="submit"
                disabled={loading}
                variant="destructive"
                className="flex gap-[8px]"
              >
                {loading && <ReloadIcon className="w-3 animate-spin" />}
                <span className="block">
                  {loading ? 'Borrando...' : 'Borrar'}
                </span>
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
