'use client';
import { signOut } from 'next-auth/react';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useToast } from '@/app/components/use-toast';
import { Button } from '@/app/components/button';

export default function ButtonSignout() {
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleclick = async () => {
    try {
      setLoading(true);
      signOut();
      toast({
        title: 'Sesión cerrada',
      });
    } catch {
      setLoading(false);
      toast({
        variant: 'destructive',
        title: 'Oh no!, Fallo cerrar sesión, intentalo de nuevo',
      });
    }
  };

  return (
    <Button
      onClick={() => {
        handleclick();
      }}
      className="hover:bg-accent-700 flex h-[48px] w-full grow items-center justify-center gap-2 border border-stone-300 bg-gray-200 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3"
      disabled={loading}
      variant={'secondary'}
    >
      {loading ? (
        <>
          <ReloadIcon className="w-6 animate-spin" />{' '}
          <div className="hidden md:block">Cerrando sesión</div>
        </>
      ) : (
        <>
          {' '}
          <ArrowLeftOnRectangleIcon className="w-6" />{' '}
          <div className="hidden md:block">Cerrar sesión</div>
        </>
      )}
    </Button>
  );
}
