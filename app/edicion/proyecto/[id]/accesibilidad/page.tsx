import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ContAcces from '@/app/ui/access/ContAcces';

export default async function Page({ params }: { params: { id: string } }) {
  //recuperacion de sesion y sus datos de proyecto
  const session = await getServerSession(authOptions);

  if (!session) return null;

  return <ContAcces />;
}
