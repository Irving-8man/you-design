// /pages/tasks/[id]/edit.tsx

import ProyectosPage from "@/app/dashboard/proyectos/page";
import prisma from "@/lib/prisma";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

export default function TaskPageEdit({ task }) {
  const router = useRouter();

  if (!task) {
    return null; // O puedes manejar el caso de tarea no encontrada de otra manera
  }

  const handleGoBack = () => {
    router.back(); // Regresar a la página anterior
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <ProyectosPage task={task} />
      <Button variant="secondary" onClick={handleGoBack}>Go Back</Button>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const taskId = parseInt(params.id);
  const task = await prisma.task.findFirst({
    where: {
      id: taskId
    }
  });

  return {
    props: {
      task
    }
  };
}
