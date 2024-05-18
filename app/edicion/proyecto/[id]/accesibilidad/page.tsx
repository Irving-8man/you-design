'use client';
import getListPautas from '@/app/lib/utilPautas';
import { PautaAcces } from '@/app/lib/utilPautas';
import TaskPauta from '@/app/ui/access/TaskPauta';
import { useEffect, useState } from 'react';
import CardAcces from '@/app/ui/edicion/cardAcces';

export default function Page({ params }: { params: { id: string } }) {
  const [pautasList, setPautasList] = useState<PautaAcces[]>([]);
  const [completedPautas, setCompletedPautas] = useState<string[]>([]);

  useEffect(() => {
    const LISTPAUTAS = getListPautas();
    setPautasList(LISTPAUTAS);

    // Simula la obtención de pautas completadas desde la API
    //const completedPautas = ['A-1.2', 'A-1.1'];
    const completedPautas:string[] = ['A-1.2', 'A-1.1'];  
    setPautasList((prevList) =>
      prevList.map((pauta) => ({
        ...pauta,
        completed: completedPautas.includes(pauta.id),
      })),
    );
  }, []);

  //Agregar al cheklist
  const handleCheck = (id: string) => {
    setPautasList((prevList) =>
      prevList.map((pauta) =>
        pauta.id === id ? { ...pauta, completed: !pauta.completed } : pauta,
      ),
    );
    const updatedPauta = pautasList.find(pauta => pauta.id === id);
    console.log(`Pauta ${id} completada: ${!updatedPauta?.completed}`);
  };

  const completedCount = pautasList.filter((pauta) => pauta.completed).length;
  const totalCount = pautasList.length;
  const completionPercentage = parseFloat(
    ((completedCount / totalCount) * 100).toFixed(2),
  );

  return (
    <div className="px-6 pb-8 pt-8">
      <div className="nowrap mb-[40px] flex flex-row justify-between">
        <div>
          <h1 className="text-[30px] font-bold">Accesibilidad</h1>
          <p className='max-w-[40ch] text-zinc-600 text-[19px] mt-[40px]'>
            Completa la lista con las pautas más importantes de accesibilidad
            Web por la WCAG2.
          </p>
        </div>

        <CardAcces porcen={completionPercentage} />
      </div>

      <section className="grid grid-cols-3 place-content-center gap-x-8 gap-y-[50px]">
        {pautasList.map((pautaItem) => (
          <TaskPauta
            key={pautaItem.id}
            {...pautaItem}
            onCheck={() => handleCheck(pautaItem.id)}
          />
        ))}
      </section>
    </div>
  );
}
