import '@/app/ui/global.css';
import Header from './ui/header-index';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
      <Header/>
        {children}
        </body>
    </html>
  );
}
