'use client';
import { Button } from '@/app/components/button';
import Save from '@/app/ui/icons/save';
import { ClipboardIcon } from '@heroicons/react/24/outline';
import { getListRatios } from '@/app/lib/utilsTypog';
import TipografiaMUI from '@/app/ui/tipogra/TipografiaMUI';
import { getAPITipografias } from '@/app/lib/tipografias';
import { Input } from '@/app/components/input';
import { useToast } from '@/app/components/use-toast';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/app/components/tooltip';
import { ChangeEvent, useState } from 'react';
import { ToastAction } from '@/app/components/toast';
import { updateTipo } from '@/app/server/actions/actions'; 

interface TipoPogra {
  tipografia: string;
  base: number;
  Ratio: string;
  interlineado: number;
}

interface TipoProps {
  idProyecto: string;
  tipografia: string;
  base: number;
  Ratio: string;
  interlineado: number;
}

export default function BaseTipos(props: TipoProps) {
  const [formData, setFormData] = useState<TipoPogra>({
    tipografia: props.tipografia,
    base: props.base,
    Ratio: props.Ratio,
    interlineado: props.interlineado,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const copyToClipboard = () => {
    const cssFormat = `
      --font-family: ${formData.tipografia};
      --base: ${formData.base}px;
      --line-height: ${formData.interlineado};
      --ratio:${parseFloat(formData.Ratio)};
  `;

    navigator.clipboard
      .writeText(cssFormat.trim())
      .then(() => {
        toast({
          title: 'Copiado en portapapeles',
          description: 'Utiliza ya tus tipografias como Custom properties',
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

  const TIPOGRAFIAS = getAPITipografias();
  const LISTRATIOS = getListRatios();
  const TIENETIPOGRA = TIPOGRAFIAS?.length > 0;
  return (
    <div className="px-6 pb-8 pt-8">
      <section>
        <div className="mt-[30px] rounded-xl border bg-card px-7 py-5 text-card-foreground shadow">
          <div className="p-6 pt-0">
            {/**cabecera base */}
            <div className="nowrap mb-4 flex flex-row justify-between">
              <p className="text-[24px] font-medium">Información base</p>
              <div className="row nowrap flex gap-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        className="row flex gap-[5px] text-[14px]"
                        onClick={copyToClipboard}
                      >
                        Base
                        <ClipboardIcon className="w-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p> Copiar como CSS</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            {/**Empiezan inputs */}
            <form action={updateTipo} className="nowrap mt-[30px] flex flex-col gap-[20px]">
                <input type="hidden" name="idProyecto" value={props.idProyecto} />
              <div className="flex flex-row justify-between">
                <div>
                  <p className="font-medium">Fuente base</p>
                  <div>
                    <div className="nowrap flex flex-row">
                      <div>
                        <Input
                          list="ListTipografias"
                          id="tipografia"
                          name="tipografia"
                          onChange={handleInputChange}
                          value={formData.tipografia}
                        />
                        <datalist id="ListTipografias">
                          {TIENETIPOGRA ? (
                            TIPOGRAFIAS.map((tipografia, idx) => (
                              <option key={idx} value={tipografia.family}>
                                {tipografia.family}
                              </option>
                            ))
                          ) : (
                            <option value="null" disabled>
                              No hay tipografías disponibles
                            </option>
                          )}
                        </datalist>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Tamaño base</p>
                  <Input
                    type="number"
                    name="base"
                    id="base"
                    min={0}
                    max={200}
                    value={formData.base}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  {' '}
                  <p className="font-medium">Escala de ratio</p>
                  <select
                    name="Ratio"
                    id="Ratio"
                    onChange={handleInputChange}
                    value={formData.Ratio}
                    className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
                  >
                    {LISTRATIOS.map((ratio) => (
                      <option
                        className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                        key={ratio.id}
                        value={ratio.valor}
                      >
                        {ratio.nombre}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  {' '}
                  <p className="font-medium">Interlineado</p>{' '}
                  <Input
                    type="number"
                    step={0.1}
                    name="interlineado"
                    id="interlineado"
                    min={0}
                    max={100}
                    value={formData.interlineado}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="nowrap flex flex-row justify-end">
                <Button className="row flex gap-[5px]" type="submit">
                  Guardar
                  <Save />
                </Button>
              </div>
            </form>
            {/**Terminan inputs */}
          </div>
        </div>

        <TipografiaMUI TamBase={formData.base} ScaleRatio={formData.Ratio} />
      </section>
    </div>
  );
}
