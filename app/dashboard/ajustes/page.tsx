import { Card, CardContent } from '@/app/components/card';
import { Button } from '@/app/components/button';
import Footer from '@/app/ui/layout/footer-index';
import UpdateUser from '@/app/ui/dashboard/update-user';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import DeleteUser from '@/app/ui/dashboard/delete-user';

export default async function AjustePage() {
  //recuperacion de sesion
  const session = await getServerSession(authOptions);
  if (!session) return null;

  return (
    <div className="px-6 pt-8">
      {/**comienza edicion */}
      <div>
        {/**cuenta */}
        <div className="w-[1000px]">
          <Card className="py-3">
            <CardContent>
              <div className="mb-4">
                <p className="text-[24px] font-bold">Información de usuario</p>
                <p className="font-thin text-slate-500">
                  Por el momento no esta disponible actualizar tu información
                  personal
                </p>
              </div>
              <UpdateUser
                id={session.user.id!}
                nombreUsuario={session.user.nombreUsuario!}
                email={session.user.email!}
              />
            </CardContent>
          </Card>
        </div>
      </div>
      {/**Borrar cuenta */}
      <div className="my-[50px]">
        <div className="w-[1000px]">
          <Card className="border-red-400 py-3">
            <CardContent>
              <div className="mb-4">
                <p className="text-[24px] font-bold">Cuenta</p>
              </div>
              {/**seccion de borrado */}
              <div className="row nowrap flex items-end justify-between">
                <div>
                  <p className="text-[16px] font-normal">Borrar cuenta</p>
                  <p className="font-thin text-slate-500">
                    Al borrar tu cuenta perderás todos tus proyectos
                  </p>
                </div>
                <div>
                  <DeleteUser
                    trigger={
                      <Button variant="destructive" className="bg-red-600">
                        Borrar cuenta
                      </Button>
                    }
                    email={session.user.email!}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
