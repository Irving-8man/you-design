import '@/app/ui/global.css'
import SideNav from "@/app/ui/dashboard/sidenav"
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav></SideNav>
      </div>
      <div className="flex-grow md:overflow-y-auto">
        <div className="pt-4 pb-5 px-6 border-b"><p className="font-medium">{session.user.nombreUsuario}</p></div>
        {children}
        </div>
    </div>  
  );
}
