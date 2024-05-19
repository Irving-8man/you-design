import React from 'react';
import { CreateTask, updateTask } from '@/app/actions/tasks-actions';
import { Task } from '@prisma/client';
import { Input } from '@/app/components/input';
import { Label } from '@/app/components/label';
import { Textarea } from '@/app/components/textArea';
import { Button } from '@/app/components/button';
import { DialogClose } from '@/app/components/dialog';

export default function NewPage({ task }: { task?: Task }) {
  const functionAction = task?.id ? updateTask : CreateTask;
  
  return (
      <form action={functionAction} className="p-4">
        <input type="hidden" name="id" value={task?.id} />
        <div className="w-full">
          <div className="mb-4">
            <Label htmlFor="nombre">Nombre</Label>
            <Input name="nombre" id="nombre" placeholder="Nombre de tu proyecto" defaultValue={task?.nombre} />
          </div>
          <div className="mb-4">
            <Label htmlFor="descripcion">Descripción</Label>
            <span className="text-zinc-400"> (Opcional)</span>
            <Textarea name="descripcion" id="descripcion" placeholder="Descripción de la tarea" defaultValue={task?.descripcion || ""} />
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button type="submit">Crear</Button>
        </div>
      </form>
  );
}
