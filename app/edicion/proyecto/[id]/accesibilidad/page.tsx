'use client';
import getListPautas from '@/app/lib/utilPautas';
import TaskPauta from '@/app/ui/access/TaskPauta';
import { useState } from 'react';

interface PautaCheck {
  id: string;
  descripcion: string;
  complete: boolean;
}

export default function Page({ params }: { params: { id: string } }) {
  const [pautasList, setPautasList] = useState([]);

  const LISTPAUTAS = getListPautas();

  return (
    <div className="px-6 pb-8 pt-8">
      <div className="grid grid-cols-3 gap-y-8">
        {LISTPAUTAS.map((pautaItem) => (
          <TaskPauta key={pautaItem.id} {...pautaItem} />
        ))}
      </div>
    </div>
  );
}
