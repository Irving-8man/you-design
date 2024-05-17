'use client'
import {signOut} from 'next-auth/react'

export default function Page(){
  return(
    <button onClick={()=>{
      signOut()
    }}>
    Cerrar sesión
    </button>
  );
}