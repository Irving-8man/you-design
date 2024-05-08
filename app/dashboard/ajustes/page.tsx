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
import { Card, CardContent } from '@/app/components/card';
import { formSchema } from '@/app/lib/formsZod';
import Link from 'next/link';
import Footer from '@/app/ui/layout/footer-index';
import Save from '@/app/ui/icons/save';

export default function Page() {
  //Estilos
  const classMain__form = 'w-[1000px]';
  const classMain__title = 'text-2xl font-bold';
  const classMain__Exter = 'flex flex-row nowrap text-[15px] gap-[5px]';
  const classMain__Link_Re = 'underline hover:no-underline';
  const classTitle_form = 'font-bold text-[24px]';
  const classLabel = 'font-normal text-[16px]';
  const classSubt_form = 'font-thin text-slate-500';
  const classMain__form_contBut =
    'flex flex-row justify-end items-end gap-[10px]';

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombreUsuario: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmitAct(values: z.infer<typeof formSchema>) {
    console.log('actualizando');
  }

  return (
    <div className="px-6 pt-8">
      {/**comienza edicion */}
      <div>
        {/**cuenta */}
        <div className={classMain__form}>
          <Card className="py-3">
            <CardContent>
              <div className="mb-4">
                <p className={classTitle_form}>Información de usuario</p>
                <p className={classSubt_form}>
                  Actualiza tu información personal
                </p>
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmitAct)}
                  className="space-y-6"
                >
                  {/**Nombre de usuario */}
                  <FormField
                    control={form.control}
                    name="nombreUsuario"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={classLabel}>
                          Nombre de usuario
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Galletazo" {...field} />
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
                        <FormLabel className={classLabel}>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="pedro@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/**password*/}
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={classLabel}>
                          Nueva contraseña
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="********"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className={classMain__form_contBut}>
                    <Button type="submit" className="row flex gap-[5px]">
                      <Save />
                      Actualizar
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
      {/**Borrar cuenta */}
      <div className="my-[50px]">
        <div className={classMain__form}>
          <Card className="py-3 border-red-400">
            <CardContent>
              <div className="mb-4">
                <p className={classTitle_form}>Cuenta</p>
              </div>
              {/**seccion de borrado */}
              <div className="flex row nowrap justify-between items-end">
                <div>
                  <p className="text-[16px] font-normal">Borrar cuenta</p>
                  <p className={classSubt_form}>
                    Al borrar tu cuenta perderás todos tus proyectos
                  </p>
                </div>
                <div>
                  <Button variant="destructive" className="bg-red-600">
                    Borrar cuenta
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
