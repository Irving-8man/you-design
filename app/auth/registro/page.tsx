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
import { useToast } from '@/app/components/use-toast';
import { ReloadIcon } from '@radix-ui/react-icons';
import Header from '@/app/ui/layout/header-index';
import Footer from '@/app/ui/layout/footer-index';
import Link from 'next/link';







export default function Page() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);

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
      setLoading(true);
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
      
      form.reset();
      if (res.ok) {
        toast({
          title: 'Bienvenido a YouDesign',
          description:
            'Ya puedes iniciar sesión.',
        });
        router.push('/auth/login');
      } else {
        setLoading(false);
        const errorData = await res.json();
        toast({
          variant: 'destructive',
          title: 'Oh no!, algo falló',
          description:
            errorData.message ||
            'Hubo un problema con tu registro. Inténtalo de nuevo.',
        });
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
          <h1 className="text-2xl font-bold">Registrar</h1>
          <div className="w-[400px]">
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
                    <div className="flex flex-row items-center gap-[10px]">
                      <Button
                        type="submit"
                        variant="outline"
                        disabled={loading}
                        className="flex flex-row gap-[5px]"
                      >
                        {loading && (
                          <ReloadIcon className="animate-spin w-3" />
                        )}
                        Registrar
                      </Button>
                      <div className="nowrap flex flex-row gap-[5px] text-[15px]">
                        <p>¿Ya tienes cuenta?</p>
                        <Link
                          href="/auth/login"
                          className="underline hover:no-underline"
                        >
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
