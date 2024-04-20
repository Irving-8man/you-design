import AcmeLogo from '@/app/ui/acme-logo';
import Link from 'next/link';
import { buttonVariants } from "@/app/components/button-shadcn"
import ArrowRightIcon from "@heroicons/react/20/solid/ArrowRightIcon"

export default function Page() {
  const classMainSection = "flex flex-col flex-nowrap justify-center items-center gap-10"
  const classMainTitle = "font-semibold text-7xl max-w-[70ch] text-center"
  const classMainSubtile = "text-lg max-w-[70ch] text-center text-zinc-600"

  return (
    <main>
      <section className={classMainSection}>
        <h1 className={classMainTitle}>Tu compañero en diseño web y accesibilidad</h1>
        <p className={classMainSubtile}>YouDesign, te apoya en mantener seguras tus decisiones de diseño de proyectos web y 
        alcanzar las pautas WCAG2 para lograr ser más accesible al público.
        </p>
        <span>
            <Link href="/home" className={buttonVariants({ variant: "default" })}>Comenzar <ArrowRightIcon className="w-5 md:w-6" /> </Link>
        </span>
      </section>
    </main>
  );
}
