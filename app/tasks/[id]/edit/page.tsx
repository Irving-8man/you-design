import ProyectosPage from "@/app/dashboard/proyectos/page";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function TaskPageEdit({ params }: { params: { id: string } }) {
  const task = await prisma.task.findFirst({
    where: {
      id: parseInt(params.id)
    }
  });

  if (!task) {
    redirect("/");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <ProyectosPage task={task} />
    </div>
  );
}
