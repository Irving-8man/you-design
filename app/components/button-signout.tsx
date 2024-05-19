'use client';
import { signOut } from 'next-auth/react';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';

export default function ButtonSignout() {
  return (
    <button
      onClick={() => {
        signOut();
      }}
      className="hover:bg-accent-700 flex h-[48px] w-full grow items-center justify-center gap-2 border border-stone-300 bg-gray-200 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3"
    >
      <ArrowLeftOnRectangleIcon className="w-6" />
      <div className="hidden md:block">Cerrar sesión</div>
    </button>
  );
}
