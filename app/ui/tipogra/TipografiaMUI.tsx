'use cliente';
import { Button } from '@/app/components/button';
import { ClipboardIcon } from '@heroicons/react/24/outline';
import { Recomen, getListRecomendaciones } from '@/app/lib/utilsTypog';
import { useState, useEffect } from 'react';
import { useToast } from '@/app/components/use-toast';
import { ToastAction } from '@/app/components/toast';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/app/components/tooltip';

// Definir el tipo de las props
interface ScalasProps {
  TamBase: number;
  ScaleRatio: string;
}

export default function TipografiaMUI({ TamBase, ScaleRatio }: ScalasProps) {
  const [sizes, setSizes] = useState<{ [key: string]: number }>({
    h1: 0,
    h2: 0,
    h3: 0,
    h4: 0,
    subtitulo_1: 0,
    subtitulo_2: 0,
    body: 0,
    boton: 0,
    caption: 0,
    overline: 0,
  });

  const listRecomend = getListRecomendaciones();
  const { toast } = useToast();

  // Calcular tamaños cuando cambian base o Ratio
  useEffect(() => {
    const scaleRatio = parseFloat(ScaleRatio);
    setSizes({
      h1: Math.round(TamBase * Math.pow(scaleRatio, 5)),
      h2: Math.round(TamBase * Math.pow(scaleRatio, 4)),
      h3: Math.round(TamBase * Math.pow(scaleRatio, 3)),
      h4: Math.round(TamBase * Math.pow(scaleRatio, 2)),
      subtitulo_1: Math.round(TamBase * Math.pow(scaleRatio, 1.5)),
      subtitulo_2: Math.round(TamBase * Math.pow(scaleRatio, 1)),
      body: TamBase,
      boton: Math.round(TamBase * Math.pow(scaleRatio, -0.5)),
      caption: Math.round(TamBase * Math.pow(scaleRatio, -1)),
      overline: Math.round(TamBase * Math.pow(scaleRatio, -1.5)),
    });
  }, [TamBase, ScaleRatio]);

  const copyToClipboard = () => {
    const baseInRem = 16; // Valor base en rem

    // Calcula los tamaños de fuente en rem
    const sizesInRem = {
      h1: sizes.h1 / baseInRem,
      h2: sizes.h2 / baseInRem,
      h3: sizes.h3 / baseInRem,
      h4: sizes.h4 / baseInRem,
      subtitulo_1: sizes.subtitulo_1 / baseInRem,
      subtitulo_2: sizes.subtitulo_2 / baseInRem,
      body: sizes.body / baseInRem,
      boton: sizes.boton / baseInRem,
      caption: sizes.caption / baseInRem,
      overline: sizes.overline / baseInRem,
    };

    // Formatea los tamaños de fuente como custom properties
    const sizesCustomProperties = Object.entries(sizesInRem)
      .map(([key, value]) => `--font-size-${key}: ${value}rem;`)
      .join('\n');

    const recomendacionesCustomProperties = listRecomend
      .map(({ categoria, weight }) => `--font-weight-${categoria}: ${weight};`)
      .join('\n');

    const cssFormat = `${sizesCustomProperties}\n${recomendacionesCustomProperties}`;

    navigator.clipboard
      .writeText(cssFormat.trim())
      .then(() => {
        toast({
          title: 'Copiado en portapapeles',
          description: 'Utiliza ya las recomendaciones como Custom properties',
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
    <section className="mt-[30px] rounded-xl border bg-card px-7 py-5 text-card-foreground shadow">
      <div className="p-6 pt-0">
        <div className="nowrap mb-4 flex flex-row justify-between">
          <p className="text-[24px] font-bold">
            Recomendación basada en Material UI
          </p>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="row flex gap-[5px] text-[14px]"
                  onClick={copyToClipboard}
                >
                  MIU
                  <ClipboardIcon className="w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p> Copiar como CSS</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="nowrap flex flex-col gap-[10px]">
          <div className="grid grid-cols-3 justify-between">
            <p className="text-[20px] font-medium">Categoría</p>
            <p className="text-center text-[20px] font-medium">Weight</p>
            <p className="text-end text-[20px] font-medium">Tamaño</p>
          </div>

          <ul className="rounded">
            {listRecomend.map((cote, idx) => (
              <li
                key={cote.id}
                className={`${idx % 2 === 0 ? 'bg-accent' : ''}`}
              >
                <div
                  className={`grid grid-cols-3 justify-between${
                    cote.categoria.toLowerCase() === 'body'
                      ? ' border bg-black text-white'
                      : ''
                  }`}
                >
                  <p
                    style={{ fontWeight: cote.weight }}
                    className="text-[17px]"
                  >
                    {cote.categoria}
                  </p>
                  <p className="text-center">{cote.weight}</p>
                  <p
                    className={`text-end font-medium ${
                      cote.categoria.toLowerCase() === 'body'
                        ? ' text-white'
                        : ' text-red-700'
                    }`}
                  >
                    {sizes[cote.categoria.toLowerCase()]}px
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
