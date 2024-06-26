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
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/form';
import { Input } from '@/app/components/input';
import { Textarea } from '@/app/components/textArea';
import { formSchemaProyect } from '@/app/lib/formsZod';
import { useToast } from '@/app/components/use-toast';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

interface CreateProyectProps {
  children: ReactNode;
  idUsuario: string;
}

export function CreateProyect(props: CreateProyectProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchemaProyect>>({
    resolver: zodResolver(formSchemaProyect),
    defaultValues: {
      idUsuario: props.idUsuario ?? "",
      nombreProyecto: '',
      descripcion: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchemaProyect>) => {
    try {
      setLoading(true);
      const res = await fetch('/api/proyectos', {
        method: 'POST',
        body: JSON.stringify({
          nombreProyecto: values.nombreProyecto,
          descripcion: values.descripcion,
          idUs: values.idUsuario,
        }),
        headers: {
          'Content-type': 'aplication/json',
        },
      });

      if (res.ok) {
        router.refresh();
        form.reset();
        setOpen(false);
        toast({
          title: 'Proyecto creado',
        });
      } else {
        setLoading(false);
        const errorData = await res.json();
        toast({
          variant: 'destructive',
          title: 'Oh no!, algo falló',
          description:
            errorData.message ||
            'Hubo un problema con crear un proyecto',
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Oh no!, Fallo crear un nuevo proyecto',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Crear nuevo</DialogTitle>
          <DialogDescription>
            Agrega un nuevo proyecto para dar seguimiento.
          </DialogDescription>
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
                        placeholder="Proyecto patata"
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
                    <FormLabel>Descripción (opcional):</FormLabel>
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
                  {loading ? 'Creando...' : 'Crear'}
                </span>
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
