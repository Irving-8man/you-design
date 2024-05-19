import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import db from '@/lib/db';
import { verificarPassword } from '@/lib/bycript';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'example@correo.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '********',
        },
      },
      async authorize(credentials, req) {
        if (credentials !== undefined) {
          const userEncontrado = await db.usuario.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (!userEncontrado) throw new Error('Usuario no encontrado');

          const validado = await verificarPassword(
            credentials.password,
            userEncontrado.password,
          );

          if (!validado) throw new Error('Credenciales no validas');
          return {
            id: userEncontrado.id,
            nombreUsuario: userEncontrado.nombreUsuario,
            email: userEncontrado.email,
          };
        } else {
          throw new Error('No llegaron credenciales');
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
        token.id = user.id
        token.nombreUsuario = user.nombreUsuario
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id
      session.user.nombreUsuario = token.nombreUsuario
      return session
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
