'use client'
import {  HomeIcon, LanguageIcon,SwatchIcon,PuzzlePieceIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/app/components/button"


export default function NavLinks({ proyectId }: { proyectId: string }) {
  //Estilos
  
  //hooks
  const pathName = usePathname()

  const links = [
    { name: 'Principal', href: `/edicion/proyecto/${proyectId}`, icon: HomeIcon },
    { name: 'Tipografía', href: `/edicion/proyecto/${proyectId}/tipografia`,icon:LanguageIcon,  },
    { name: 'Colores', href: `/edicion/proyecto/${proyectId}/colores`,icon:SwatchIcon,  },
    { name: 'Componentes', href: `/edicion/proyecto/${proyectId}/componentes`,icon:PuzzlePieceIcon,  },
    { name: 'Accesibilidad', href: `/edicion/proyecto/${proyectId}/accesibilidad`,icon:CheckCircleIcon,  },
  ];

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
