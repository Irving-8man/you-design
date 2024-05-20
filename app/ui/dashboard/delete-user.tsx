'use client';

import { useState, type ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/app/components/dialog';
import { Input } from '@/app/components/input';
import { Button } from '@/app/components/button';
import { useToast } from '@/app/components/use-toast';
import { ReloadIcon } from '@radix-ui/react-icons';
import { deleteUser } from '@/app/server/actions/userActions';
import { signOut } from 'next-auth/react';

interface DeleteUserProps {
  trigger: ReactNode;
  email: string;
}

export default function DeleteUser(props: DeleteUserProps) {
  const [confirmEmail, setConfirmEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const handleDeleteAccount = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (confirmEmail !== props.email) {
      toast({
        variant: 'destructive',
        title: 'El email no corresponde.',
      });
      return;
    }
    setLoading(true);

    try {
      const borrando = await deleteUser();
      toast({
        title: 'Borrando tu cuenta...',
        description: 'Estamos borrando tu cuenta',
      });
      if (borrando) {
        signOut();
        toast({
          variant: 'destructive',
          title: 'Tu cuenta ha sido borrada.',
        });
      }
    } catch {
      toast({
        variant: 'destructive',
        title: 'Fallo borrar tu cuenta. Intenta de nuevo.',
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{props.trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Borrar cuenta</DialogTitle>
          <DialogDescription>
            Se borrara permanente tu cuenta y perderas todos tus proyectos.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleDeleteAccount}>
          <div className="flex flex-col space-y-3">
            <p className="text-sm">
              Para confirmar, ingresa tu email:{' '}
              <span className="font-mono">{props.email}</span>
            </p>
            <Input
              type="email"
              className="input"
              onChange={(e) => setConfirmEmail(e.target.value)}
              placeholder="Tu email"
              disabled={loading}
            />
            <DialogFooter className="mt-3">
              <DialogClose asChild>
                <Button variant="ghost" disabled={loading}>
                  Cancel
                </Button>
              </DialogClose>
              <Button
                disabled={loading || confirmEmail !== props.email}
                type="submit"
                variant="destructive"
              >
                {loading ?? <ReloadIcon className="w-3 animate-spin" />}
                <span>{loading ? 'Borrando...' : 'Borrar'}</span>
              </Button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
