'use server';

import {db} from '@/lib/db';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { revalidatePath } from 'next/cache';

export async function deleteUser() {
  const session = await getServerSession(authOptions);
  if (!session) return null;

  if (!session.user) {
    console.error("No autenticado.");
    return null;
  }
  // Delete user:
  await db.usuario.delete({
    where: {
      id: session.user.id,
    },
  });
  
  revalidatePath('/dashboard/ajustes')
  return true;
};
