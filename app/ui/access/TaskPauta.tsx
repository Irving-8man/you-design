'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/accordion';
import { useState } from 'react';
import { Checkbox } from '@/app/components/checkbox';
import { Badge } from '@/app/components/badge';
import ExternalLink from '@/app/components/external-link';


interface IPautaAcces {
  id: string;
  nivel: string;
  titulo: string;
  descripcion: string;
  web: string;
}

export default function TaskPauta({
  id,
  nivel,
  titulo,
  descripcion,
  web,
}: IPautaAcces) {
  const [pautaComplete, setPautaComplete] = useState(false);

  const STYLES_NIVELES:{ [key: string]: string } = {
    A: 'bg-teal-300 text-black',
    AA: 'bg-emerald-400 text-black',
    AAA: 'bg-fuchsia-400 text-black',
  };

  return (
    <Accordion
      type="single"
      className="min-w-[300px] max-w-[350px] rounded-md shadow-sm"
      collapsible
    >
      <AccordionItem value="item-1" className="p-6 border">
        <div className="row nowrap flex items-center justify-between">
          <Checkbox id="terms1" />
          <div className="flex flex-col items-end">
            <Badge variant="outline" className={STYLES_NIVELES[nivel]}>
              Nivel {nivel}
            </Badge>
            <AccordionTrigger className="row flex gap-[10px]">
              <div className="grid gap-1.5 leading-none">
                <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {`${id}.${titulo}`}
                </p>
              </div>
            </AccordionTrigger>
          </div>
        </div>

        <AccordionContent>
          {descripcion} <span><ExternalLink href={web} className="underline text-blue-600">Conocer más..</ExternalLink></span>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
