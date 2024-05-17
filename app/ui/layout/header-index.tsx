import Github from '@/app/ui/icons/github';
import Link from 'next/link';
import { buttonVariants } from '@/app/components/button';
import ExternalLink from '@/app/components/external-link';


export default function Header() {
  const classHeader =
    'px-5 py-5 w-full lg:px-9 sticky top-0 z-50 bg-white dark:bg-neutral-900 border-b';
  const classHeaderNav = 'flex flex-row justify-between';
  const classHeaderNavLinks = 'flex flex-row justify-center items-center gap-5';
  const classHeaderTitle = 'text-lg font-bold';
  return (
    <header className={classHeader}>
      <nav className={classHeaderNav}>
        <Link href="/">
          <span className={classHeaderTitle}> YouDesign</span>
        </Link>
        <div className={classHeaderNavLinks}>
          <Link
            href="/auth/login"
            className={buttonVariants({ variant: 'outline' })}
          >
            Iniciar sesión
          </Link>
          <ExternalLink href="https://github.com/Irving-8man/you-design">
            <Github />
          </ExternalLink>
        </div>
      </nav>
    </header>
  );
}
