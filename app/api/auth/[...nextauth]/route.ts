import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/lib/db"
import {verificarPassword} from "@/lib/bycript"

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "example@correo.com" },
        password: { label: "Password", type: "password", placeholder:"********"}
      },
      async authorize(credentials,req){

        //1 recibir credenciales
        if(credentials !== undefined){
          //2 comprobar existencia
          const userEncontrado = await db.usuario.findUnique({
            where:{
              email:credentials.email
            }
          })

          // 3 devolver resultado
          if(!userEncontrado){
            return null;
          }
          const validado = await verificarPassword(credentials.password,userEncontrado.password)
          if(!validado) return null;
          return{
            id:userEncontrado.id,
            nombreUsuario: userEncontrado.nombreUsuario,
            email: userEncontrado.email
          }
        }else{
          return null;
        }
      }
    })
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }