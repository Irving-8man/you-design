'use server';

import {db} from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function CreateTask(formData: FormData) {
  const nombre = formData.get('nombre')?.toString();
  const descripcion = formData.get('descripcion')?.toString();

  console.log({ nombre, descripcion });

  if (!nombre || !descripcion) {
    return;
  }

  redirect('/dashboard/proyectos');
}

export async function removeTask(formData: FormData) {
  'use server';
  const taskId = formData.get('taskId')?.toString();

  if (!taskId) {
    return;
  }

  revalidatePath('/dashboard/proyectos');
}

export async function updateTask(formData: FormData) {
  const id = formData.get('id')?.toString();
  const nombre = formData.get('nombre')?.toString();
  const descripcion = formData.get('descripcion')?.toString();

  if (!id || !nombre || !descripcion) {
    return;
  }



  redirect('/dashboard/proyectos');
}
