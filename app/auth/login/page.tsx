//import {signIn} from 'next-auth/react'
import Header from '@/app/ui/layout/header-index';
import Footer from '@/app/ui/layout/footer-index';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/card';

export default function Page() {

  //Estilos
  const classMain = 'min-h-[100vh] flex flex-col justify-between py-15';
  const classMain__card = "max-w-[300px]"
  /**
   *  <button onClick={async ()=>{
        const result = await signIn(SERVICES.GITHUB,{
          callbackUrl:"/dashboard",
          redirect:false,
        })
      }}>
        Continua con {SERVICES.GITHUB}
      </button>
   */
  return (
    <main className={classMain}>
      <Header />
      <div>
        <button>Continua con</button>

        <div className={classMain__card} >
          <Card>
            <CardHeader>
              <CardTitle>Accede a YouDesign</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </main>
  );
}
