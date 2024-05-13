import '@/app/ui/global.css'
import { Toaster } from "@/app/components/toaster"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="es">
      <body>
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
