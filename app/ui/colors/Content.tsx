'use client';

import { Button } from '@/app/components/button';
import Save from '@/app/ui/icons/save';
import { ClipboardIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Input } from '@/app/components/input';
import { useToast } from '@/app/components/use-toast';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/app/components/tooltip';
import { ToastAction } from '@/app/components/toast';
import ContrastColors from './ContrastColors';


interface ContrastColorsProps {
  paleta: Color[]; 
}

interface Color {
  id: number;
  colorHex: string;
}

export default function ContenColor(prop:ContrastColorsProps) {
  /**let coloresUser = [
    { id: 1, colorHex: '#14B8A6' },
    { id: 2, colorHex: '#FB7185' },
    { id: 3, colorHex: '#133074' },
    { id: 4, colorHex: '#0E1753' },
  ];**/

  //hooks
  const [paletaUser, setPaletaUser] = useState<Color[]>(prop.paleta);
  const { toast } = useToast();

  const handleColorChange = (id: number, newColor: string) => {
    setPaletaUser((prevPalette) =>
      prevPalette.map((color) =>
        color.id === id ? { ...color, colorHex: newColor } : color,
      ),
    );
  };

  const copyToClipboard = () => {
    const cssFormat = paletaUser.reduce((acc, color, index) => {
      return `${acc}--color${index + 1}:${color.colorHex};\n`;
    }, '');

    navigator.clipboard
      .writeText(cssFormat.trim())
      .then(() => {
        toast({
          title: 'Copiado en portapapeles',
          description: 'La paleta de colores se ha copiado como CSS.',
        });
      })
      .catch((error) => {
        console.error('Error al copiar al portapapeles:', error);
        toast({
          variant: 'destructive',
          title: 'Oh no!, algo fallo',
          description: 'Ocurrio un problema al copiar a portapales',
          action: (
            <ToastAction altText="Intentar de nuevo">
              Intentar de nuevo
            </ToastAction>
          ),
        });
      });
  };

  return (
    <div className="flex flex-row justify-between px-6 pb-8">
      <section className="nowrap min-w-[450px] pt-6">
        <div className="nowrap flex flex-col justify-between">
          <h1 className="text-[30px] font-bold">Colores</h1>
          <p className="mt-[16px] max-w-[40ch] text-[16px] text-zinc-600">
            Crea tu paleta de colores, comprueba su contraste con parámetros de
            la WCAG y copialo como CSS.
          </p>
        </div>

        <article className="mt-[30px] rounded-xl border bg-card px-3 py-5 text-card-foreground shadow">
          <div className="p-6 pt-0">
            <div className="nowrap mb-4 flex flex-row justify-between">
              <p className="text-[26px] font-medium">Paleta de colores</p>
              {/**cuantos te quedan */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      className="row flex gap-[5px] text-[14px]"
                      onClick={copyToClipboard}
                    >
                      Paleta
                      <ClipboardIcon className="w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p> Copiar como CSS</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <ul>
              {paletaUser.map((color, i) => (
                <li key={i + 1}>
                  <div className="flex flex-row justify-between py-3">
                    <div className="flex flex-col gap-[2px]">
                      <p className="font-medium">Color {i + 1}</p>
                      <p className="text-[16px]">{color.colorHex}</p>
                    </div>

                    <Input
                      type="color"
                      className="h-[40px] w-[60px] p-0"
                      value={color.colorHex}
                      onChange={(e) => {
                        handleColorChange(color.id, e.target.value);
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="nowrap flex flex-row justify-end">
            <Button className="row flex gap-[5px]">
              Guardar
              <Save />
            </Button>
          </div>
        </article>
      </section>

      <ContrastColors paleta={paletaUser} />
    </div>
  );
}
