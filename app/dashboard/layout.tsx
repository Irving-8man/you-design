import '@/app/ui/global.css'
import SideNav from "@/app/ui/dashboard/sidenav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const classLayaUserCap = "pt-4 pb-5 px-6 border-b"
  const classLayaUser = "font-medium"

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav></SideNav>
      </div>
      <div className="flex-grow md:overflow-y-auto">
        <div className={classLayaUserCap}><p className={classLayaUser}>autumnLoki</p></div>
        {children}
        </div>
    </div>  
  );
}
