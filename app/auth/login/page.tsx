'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/app/components/button';
import { Form, FormControl, FormField, FormItem, FormLabel,FormMessage,} from '@/app/components/form';
import { Input } from '@/app/components/input';
import { Card, CardContent } from '@/app/components/card';
import { formLogin } from '@/app/lib/formsZod';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import Header from '@/app/ui/layout/header-index';
import Footer from '@/app/ui/layout/footer-index';


export default function Page() {
  //Estilos
  const classMain = 'min-h-[100vh] flex flex-col justify-between py-15';
  const classMain__contentForm = 'flex flex-row justify-center mt-5 mb-20';
  const classMain__contentForm_cap = "flex flex-col nowrap justify-center gap-4";
  const classMain__title = "text-2xl font-bold";
  const classMain__form = 'w-[400px]';

  //Estados del formulario
  const STATUS_LOGIN = {
    
  }

  //hooks
  const router = useRouter()

  // 1. Define tu form.
  const form = useForm<z.infer<typeof formLogin>>({
    resolver: zodResolver(formLogin),
    defaultValues: {
      email: '',
      password:''
    },
  });

  // 2. Define un submit handler.
  async function onSubmit(values: z.infer<typeof formLogin>) {
    const res = await signIn('credentials',{
      email:values.email,
      password:values.password,
      redirect:false,
    })

    if(res !== undefined){
      if(res.ok){
        router.push('/dashboard')
      }else{
        alert(res.error)
      }
    }
  }

  return (
    <main className={classMain}>
      <Header />
      <div className={classMain__contentForm}>
        <section className={classMain__contentForm_cap}>
          <h1 className={classMain__title}>Ingresar</h1>
          <div className={classMain__form}>
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
                    <Button type="submit">Ingresar</Button>
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
