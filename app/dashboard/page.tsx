//import { getServerSession } from 'next-auth'
//import ButtonSignout from '@/app/components/button-signout'
import Footer from '@/app/ui/layout/footer-index';

export default async function Page() {
  //hooks
  //const session = await getServerSession()

  return (
    <div>
      <h1>Bienvenido Irving </h1>
      <p>Correo geyler0502@outlook.com</p>
      <p>hola</p>
      <Footer/>
    </div>
  )
}