'use client';

import type { z } from 'zod';
import { useState, type ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/app/components/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/app/components/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/form';
import { Input } from '@/app/components/input';
import { Textarea } from '@/app/components/textArea';
import { formSchemaEditProyect } from '@/app/lib/formsZod';
import { useToast } from '@/app/components/use-toast';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

interface EditProyectProps {
  trigger: ReactNode;
  idProyect: string;
  nombre: string;
  descripcion: string;
}

export default function EditProyect(props: EditProyectProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchemaEditProyect>>({
    resolver: zodResolver(formSchemaEditProyect),
    defaultValues: {
      id: props.idProyect,
      nombreProyecto: props.nombre,
      descripcion: props.descripcion,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchemaEditProyect>) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/proyectos`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: values.id,
          nombreProyecto: values.nombreProyecto,
          descripcion: values.descripcion,
        }),
      });
      if (res.ok) {
        router.refresh();
        form.reset();
        setOpen(false);
        toast({
          title: 'Proyecto actualizado',
        });
      } else {
        setLoading(false);
        const errorData = await res.json();
        toast({
          variant: 'destructive',
          title: 'Oh no!, algo falló',
          description:
            errorData.message || 'Hubo un problema con actualizar proyecto',
        });
      }
      
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Oh no!, Fallo actulizar proyecto',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{props.trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Actualizar proyecto</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col gap-6 py-4">
              <FormField
                control={form.control}
                name="nombreProyecto"
                render={({ field }) => (
                  <FormItem className="nowrap flex flex-col items-start justify-start gap-2">
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        autoComplete="off"
                        placeholder={props.nombre}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="descripcion"
                render={({ field }) => (
                  <FormItem className="nowrap flex flex-col items-start justify-start gap-2">
                    <FormLabel>Descrición (opcional):</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Máximo 100 caracteres"
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost" disabled={loading}>
                  Cancelar
                </Button>
              </DialogClose>
              <Button
                type="submit"
                disabled={loading}
                className="flex gap-[8px]"
              >
                {loading && <ReloadIcon className="w-3 animate-spin" />}
                <span className="block">
                  {loading ? 'Actualizando...' : 'Actualizar'}
                </span>
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
