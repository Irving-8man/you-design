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

//Entradas del cliente
function TipografiaCliente() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('hola');
  };
  //Estilos
  const classMain__form = 'w-[1000px]';
  const classLabel = 'font-normal text-[16px]';

  return (
    <Card className="mt-[30px] px-7 py-5">
      <CardContent>
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

        <div className='flex flex-col nowrap gap-[50px]'>
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
            <div> <p className="font-medium">Tamaño base</p> </div>
            <div> <p className="font-medium">Escala de ratio</p> </div>
            <div> <p className="font-medium">Interlineado</p> </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}


function TipografiaRecomen() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('hola');
  };
  //Estilos
  const classMain__form = 'w-[1000px]';
  const classLabel = 'font-normal text-[16px]';

  const listRecomend = [
    {id:1,categoria:'H1',weight:'200'},
    {id:2,categoria:'H2',weight:'200'},
    {id:3,categoria:'H3',weight:'400'},
    {id:4,categoria:'H4',weight:'400'},
    {id:5,categoria:'Subtitulo 1',weight:'400'},
    {id:6,categoria:'Subitulo 2',weight:'600'},
    {id:7,categoria:'Body',weight:'400'},
    {id:8,categoria:'Botón',weight:'600'},
    {id:9,categoria:'Caption',weight:'400'},
    {id:10,categoria:'Overline',weight:'400'},
  ];

  return (
    <Card className="mt-[30px] px-7 py-5">
      <CardContent>
        <div className="nowrap mb-4 flex flex-row justify-between">
          <p className="text-[24px] font-bold">Recomendación basada en Material UI</p>
          <Button
            variant="outline"
            className="row flex gap-[5px] text-[14px]"
            onClick={copyToClipboard}
          >
            <ClipboardIcon className="w-6" />
            Copiar CSS
          </Button>
        </div>

        <div className='flex flex-col nowrap gap-[10px]'>
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
      </CardContent>
    </Card>
  );
}




//Pagina
export default function Page({ params }: { params: { id: string } }) {
  const [datos,setDatos] = useState();

  useEffect(()=>{

  },[])

  

  return (
    <div className="px-6 pt-8 pb-8">
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
