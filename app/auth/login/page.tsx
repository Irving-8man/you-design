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
} from '@/app/components/form';
import { Input } from '@/app/components/input';
import { Card, CardContent } from '@/app/components/card';
import { formLogin } from '@/app/lib/formsZod';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import Header from '@/app/ui/layout/header-index';
import Footer from '@/app/ui/layout/footer-index';
import { useState } from 'react';
import { useToast } from '@/app/components/use-toast';
import { ReloadIcon } from '@radix-ui/react-icons';

export default function Page() {
  //hooks
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formLogin>>({
    resolver: zodResolver(formLogin),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formLogin>) {
    try {
      setLoading(true);
      const res = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (res !== undefined) {
        if (res.ok) {
          toast({
            title: 'Bienvenido a YouDesign',
            description: 'Redirigiendo al Dashboard.',
          });
          router.push('/dashboard/proyectos');
        } else {
          setLoading(false);
          toast({
            variant: 'destructive',
            title: 'Oh no!, algo falló',
            description:
              res.error ||
              'Hubo un problema con tu registro. Inténtalo de nuevo.',
          });
        }
      }
    } catch (error) {
      setLoading(false);
      toast({
        variant: 'destructive',
        title: 'Oh no!, Fallo el registro, intentalo de nuevo',
      });
    }
  }

  return (
    <main className="py-15 flex min-h-[100vh] flex-col justify-between">
      <Header />
      <div className="mb-20 mt-5 flex flex-row justify-center">
        <section className="nowrap flex flex-col justify-center gap-4">
          <h1 className="text-2xl font-bold">Iniciar sesión</h1>
          <div className="w-[400px]">
            <Card className="py-5">
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
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
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex flex-row items-center gap-[10px]">
                      <Button
                        type="submit"
                        variant="outline"
                        disabled={loading}
                        className="flex flex-row gap-[5px]"
                      >
                        {loading && <ReloadIcon className="w-3 animate-spin" />}
                        Ingresar
                      </Button>
                      <div className="nowrap flex flex-row gap-[5px] text-[15px]">
                        <p>¿Aún no tienes cuenta?</p>
                        <Link
                          href="/auth/registro"
                          className="underline hover:no-underline"
                        >
                          Regístrate
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
