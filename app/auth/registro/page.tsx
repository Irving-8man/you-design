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
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '@/app/ui/layout/header-index';
import Footer from '@/app/ui/layout/footer-index';
import Link from 'next/link';

export default function Page() {
  const classMain__form = 'w-[400px]';
  const classMain__title = 'text-2xl font-bold';
  const classMain__form_contBut = 'flex flex-row items-end gap-[10px]';
  const classMain__Exter = 'flex flex-row nowrap text-[15px] gap-[5px]';
  const classMain__Link_Re = 'underline hover:no-underline';

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombreUsuario: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });


  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          nombreUsuario: values.nombreUsuario,
          email: values.email,
          password: values.password,
        }),
        headers: {
          'Content-type': 'aplication/json',
        },
      });

      if (res.ok) {
        router.push('/auth/login');
      } else {
        console.log(res);
      }
    } catch (error) {
      
    }
  }

  return (
    <main className="min-h-[100vh] flex flex-col justify-between py-15">
      <Header />
      <div className="flex flex-row justify-center mt-5 mb-20">
        <section className="flex flex-col nowrap justify-center gap-4">
          <h1 className={classMain__title}>Registrar</h1>
          <div className={classMain__form}>
            <Card className="py-5">
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    {/**Nombre de usuario */}
                    <FormField
                      control={form.control}
                      name="nombreUsuario"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre de usuario</FormLabel>
                          <FormControl>
                            <Input placeholder="Galletazo" {...field} />
                          </FormControl>
                          <FormDescription>
                            Mínimo 8 caracteres.
                          </FormDescription>
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
                          <FormLabel>Email</FormLabel>
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
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="********"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Mínimo 8 caracteres.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/**Confirmar password */}
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirmar password</FormLabel>
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
                      <Button type="submit">Registrar</Button>
                      <div className={classMain__Exter}>
                        <p>¿Ya tienes cuenta?</p>
                        <Link href="/auth/login" className={classMain__Link_Re}>
                          Iniciar sesión
                        </Link>
                      </div>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
