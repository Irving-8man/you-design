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
        if(credentials !== undefined){
          const userEncontrado = await db.usuario.findUnique({
            where:{
              email:credentials.email
            }
          })

          if(!userEncontrado) throw new Error('Usuario no encontrado') 
      
          const validado = await verificarPassword(credentials.password,userEncontrado.password)
          
          if(!validado) throw new Error('Credenciales no validas') 
          return{
            id:userEncontrado.id,
            nombreUsuario: userEncontrado.nombreUsuario,
            email: userEncontrado.email
          }
        }else{
          throw new Error('No llegaron credenciales') 
        }
      }
    })
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }