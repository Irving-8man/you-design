'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/app/components/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/app/components/form';
import { Input } from '@/app/components/input';
import Save from '@/app/ui/icons/save';
import { formSchemaAjustes } from '@/app/lib/formsZod';
import { useState } from 'react';
import { ReloadIcon } from '@radix-ui/react-icons';

interface UpdateUserProps {
  id: string;
  nombreUsuario: string;
  email: string;
}

export default function UpdateUser(props: UpdateUserProps) {
  const classLabel = 'font-normal text-[16px]';
  //hooks
  const [loading, setLoading] = useState<boolean>(false);


  const form = useForm<z.infer<typeof formSchemaAjustes>>({
    resolver: zodResolver(formSchemaAjustes),
    defaultValues: {
      id: props.id,
      nombreUsuario: props.nombreUsuario,
      email: props.email,
    },
  });

  async function onSubmitAct(values: z.infer<typeof formSchemaAjustes>) {

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitAct)} className="space-y-6">
        {/**Nombre de usuario */}
        <FormField
          control={form.control}
          name="nombreUsuario"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={classLabel}>Tu nombre de usuario</FormLabel>
              <FormControl>
                <Input disabled placeholder="Galletazo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/**Email*/}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={classLabel}> Tu email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="pedro@example.com"
                  {...field}
                  disabled
                />
              </FormControl>
              <FormDescription className="flex items-center gap-2 pl-1">
                <span>
                  {' '}
                  ⚠ Por seguridad y alcance no se realizara el manejo del Email y Contraseña.
                </span>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row items-end justify-end gap-[10px]">
          <Button
            type="submit"
            className="row flex gap-[5px]"
            disabled
          >
            {loading ? <ReloadIcon className="w-3 animate-spin" /> : <Save />}
            <span className="block">
              {loading ? 'Actualizando...' : 'Actualizar'}
            </span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
