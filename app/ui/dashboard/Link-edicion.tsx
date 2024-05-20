import Link from 'next/link';
import { type ReactNode } from 'react';

interface EdicionProyectProps {
  trigger: ReactNode;
  idProyect: string;
}

export default function EdicionProyect(props: EdicionProyectProps) {
  return (
    <Link href={`/edicion/proyecto/${props.idProyect}`}>{props.trigger}</Link>
  );
}
