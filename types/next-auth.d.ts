import { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  nombreUsuario: string;
  limitProyectos: number;
};


declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      nombreUsuario: string;
      email: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    nombreUsuario: string;
    email: string;
  }
}
