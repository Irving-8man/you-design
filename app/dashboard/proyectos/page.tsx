//import { getServerSession } from 'next-auth'
//import ButtonSignout from '@/app/components/button-signout'
import Footer from '@/app/ui/layout/footer-index';

export default async function Page() {
  //hooks
  //const session = await getServerSession()

  return (
    <div className="px-6 pt-8">
      
      <Footer/>
    </div>
  )
}