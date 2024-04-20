import '@/app/ui/global.css'
import Header from '@/app/ui/layout/header-index'
import Footer from '@/app/ui/layout/footer-index'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const classBody ="min-h-[100vh] flex flex-col justify-between"
  return (
    <html lang="es">
      <body className={classBody}>
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
