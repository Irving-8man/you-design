import Link from 'next/link';
import { buttonVariants } from '@/app/components/button';
import ArrowRightIcon from '@heroicons/react/20/solid/ArrowRightIcon';
import Header from '@/app/ui/layout/header-index';
import Footer from '@/app/ui/layout/footer-index';

export default function Page() {
  //estilos
  const classMain = 'min-h-[100vh] flex flex-col justify-between py-15';
  const classMain__Section =
    'flex flex-col flex-nowrap justify-center items-center gap-10';
  const classMain__Title = 'font-semibold text-7xl max-w-[70ch] text-center';
  const classMain__Subtile = 'text-lg max-w-[70ch] text-center text-zinc-600';

  return (
    <>
      <main className={classMain}>
        <Header />
        <section className={classMain__Section}>
          <h1 className={classMain__Title}>
            Tu compañero en diseño web y accesibilidad
          </h1>
          <p className={classMain__Subtile}>
            YouDesign, te apoya en mantener seguras tus decisiones de diseño de
            proyectos web y alcanzar las pautas WCAG2 para lograr ser más
            accesible al público.
          </p>
          <span>
            <Link
              href="/dashboard/proyectos"
              className={buttonVariants({ variant: 'default' })}
            >
              Comenzar <ArrowRightIcon className="w-5 md:w-6" />{' '}
            </Link>
          </span>
        </section>
        <Footer />
      </main>
    </>
  );
}
