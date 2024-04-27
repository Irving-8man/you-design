'use client'

import {  HomeIcon,  Cog6ToothIcon, } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/app/components/button"



const links = [
  { name: 'Todos los proyectos', href: '/dashboard', icon: HomeIcon },
  { name: 'Ajustes', href: '/dashboard/cuenta',icon:Cog6ToothIcon,  }
];

export default function NavLinks() {
  //Estilos
  
  //hooks
  const pathName = usePathname()
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Button asChild key={link.name} variant="link">
            <Link
                key={link.name}
                href={link.href}
                className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3
                
                ${pathName===link.href ? 'bg-accent hover:no-underline':''}`}
              >
                <LinkIcon className="w-6" />
                <p className="hidden md:block">{link.name}</p>
              </Link>
          </Button>

        );
      })}
    </>
  );
}
