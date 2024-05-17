'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/accordion';
import { Checkbox } from '@/app/components/checkbox';
import { Badge } from '@/app/components/badge';
import ExternalLink from '@/app/components/external-link';
import '@/app/ui/card.css'


interface IPautaAcces {
  id: string;
  nivel:string;
  titulo: string;
  descripcion: string;
  web: string;
  completed: boolean;
  onCheck: () => void;
}

export default function TaskPauta({
  id,
  nivel,
  titulo,
  descripcion,
  web,
  completed,
  onCheck,
}: IPautaAcces) {

  const STYLES_NIVELES:{ [key: string]: string } = {
    A: 'bg-teal-300 text-black',
    AA: 'bg-emerald-400 text-black',
    AAA: 'bg-fuchsia-400 text-black',
  };

  const STYLES_CHECK:{ [key: string]: string } = {
    A: ' accesA',
    AA: ' accesAA',
    AAA: ' accesAAA',
  };


  return (
    <Accordion
      type="single"
      className="min-w-[300px] max-w-[350px]"
      collapsible
    >
      <AccordionItem value="item-1" className={`p-6 border-[3px] relative shadow-sm transition__board ${completed ? STYLES_CHECK[nivel] : ''}`}>
        <div className="row nowrap flex items-center justify-between">
          <Checkbox className="w-6 h-6" id={id} checked={completed}  onCheckedChange={onCheck}   />
          <div className="flex flex-col items-end">
            <Badge variant="outline" className={STYLES_NIVELES[nivel]}>
              Nivel {nivel}
            </Badge>
            <AccordionTrigger className="row flex gap-[10px]">
              <div className="grid gap-1.5 leading-none">
                <p className={`text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium ${completed ? 'text-gray-500' : ''}`}>
                {`${id}.${titulo}`}
                </p>
              </div>
            </AccordionTrigger>
          </div>
        </div>

        <AccordionContent className="">
          {descripcion} <span><ExternalLink href={web} className="underline text-blue-600">Conocer más..</ExternalLink></span>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
