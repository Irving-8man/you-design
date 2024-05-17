"use server"

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function CreateTask(formData : FormData){

    const nombre = formData.get("nombre")?.toString();
    const descripcion = formData.get("descripcion")?.toString();

    console.log({nombre , descripcion})

    if(!nombre || !descripcion){
      return;
    }

    const newTask = await prisma.task.create({
      data: {
        nombre: nombre,
        descripcion: descripcion
      }
    })

    console.log(newTask)
    redirect('/')
  }

  export async function removeTask(formData: FormData){
    "use server"
    const taskId = formData.get("taskId")?.toString();
    
    if(!taskId){
        return;
    }

    await prisma.task.delete({
        where: {
            id: parseInt(taskId)
        }
    })

    revalidatePath('/')

}

export async function updateTask(formData: FormData) {
    const id = formData.get("id")?.toString();
    const nombre = formData.get("nombre")?.toString();
    const descripcion = formData.get("descripcion")?.toString();
  
    if (!id || !nombre || !descripcion) {
      return;
    }
  
    await prisma.task.update({
      where: {
        id: parseInt(id),
      },
      data: {
        nombre: nombre,
        descripcion: descripcion
      }
    });
    
    redirect("/");
  }