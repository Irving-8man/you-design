'use client';
import { Button } from '@/app/components/button';
import Save from '@/app/ui/icons/save';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/form';
import { Input } from '@/app/components/input';
import { Card, CardContent } from '@/app/components/card';
import { formSchema } from '@/app/lib/formsZod';
import { ClipboardIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import {
  Ratio,
  getListRatios,
  Recomen,
  getListRecomendaciones,
} from '@/app/lib/utilsTypog';

//Entradas del cliente
function TipografiaCliente() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('hola');
  };

  const LISTRATIOS = getListRatios();
  //Estilos
  const classMain__form = 'w-[1000px]';
  const classLabel = 'font-normal text-[16px]';

  return (
    <section className="mt-[30px] rounded-xl border bg-card px-7 py-5 text-card-foreground shadow">
      <div className="p-6 pt-0">
        <div className="nowrap mb-4 flex flex-row justify-between">
          <p className="text-[24px] font-bold">Información base</p>
          <Button
            variant="outline"
            className="row flex gap-[5px] text-[14px]"
            onClick={copyToClipboard}
          >
            <ClipboardIcon className="w-6" />
            Copiar CSS
          </Button>
        </div>

        <div className="nowrap flex flex-col gap-[50px]">
          <div>
            <p className="font-medium">Fuentes base</p>
            <div>
              <div className="flex flex-row justify-between">
                <div>Fuente Uno</div>
                <div>fuente dos</div>
                <div>Fuente tres</div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div>
              <p className="font-medium">Tamaño base</p>
            </div>
            <div>
              {' '}
              <p className="font-medium">Escala de ratio</p>
              <select name="SelectRatio" id="ratios" className="max-w-[20ch]">
                {LISTRATIOS.map((Ratio) => (
                  <option key={Ratio.id} value={Ratio.valor} className="max-w-[10ch]">
                      {Ratio.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div>
              {' '}
              <p className="font-medium">Interlineado</p>{' '}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TipografiaRecomen() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('hola');
  };
  //Estilos
  const classMain__form = 'w-[1000px]';
  const classLabel = 'font-normal text-[16px]';

  const listRecomend = getListRecomendaciones();

  return (
    <section className="mt-[30px] rounded-xl border bg-card px-7 py-5 text-card-foreground shadow">
      <div className="p-6 pt-0">
        <div className="nowrap mb-4 flex flex-row justify-between">
          <p className="text-[24px] font-bold">
            Recomendación basada en Material UI
          </p>
          <Button
            variant="outline"
            className="row flex gap-[5px] text-[14px]"
            onClick={copyToClipboard}
          >
            <ClipboardIcon className="w-6" />
            Copiar CSS
          </Button>
        </div>

        <div className="nowrap flex flex-col gap-[10px]">
          <div className="flex flex-row justify-between">
            <p>Categoría</p>
            <p>Weight</p>
            <p>Tamaño</p>
          </div>
          <ul>
            {listRecomend.map((cote) => (
              <li key={cote.id}>
                <div className="flex flex-row justify-between">
                  <p style={{ fontWeight: cote.weight }}>{cote.categoria}</p>
                  <p>{cote.weight}</p>
                  <p>{cote.weight}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

//Pagina
export default function Page({ params }: { params: { id: string } }) {
  const [datos, setDatos] = useState();

  useEffect(() => {}, []);

  return (
    <div className="px-6 pb-8 pt-8">
      <div className="nowrap flex flex-row justify-between">
        <h1 className="text-[30px] font-medium">Tipografía</h1>
        <Button className="row flex gap-[5px]">
          <Save />
          Guardar
        </Button>
      </div>

      <section>
        <TipografiaCliente />
        <TipografiaRecomen />
      </section>
    </div>
  );
}
