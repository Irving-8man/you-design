'use client';
import { Button } from '@/app/components/button';
import { ClipboardIcon } from '@heroicons/react/24/outline';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/app/components/tooltip';
import { useToast } from '@/app/components/use-toast';

interface ContrastColorsProps {
  paleta: Color[]; // Color es la interfaz definida en el componente padre
}

interface Color {
  id: number;
  colorHex: string;
}


export default function ButtonClipBoard({}) {
  const { toast } = useToast();

  const copyToClipboard = () => {
    toast({
      title: 'Copiado en portapapeles',
      description: 'Utiliza ya tu paleta de colores como CSS',
    });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" onClick={copyToClipboard}>
            <ClipboardIcon className="w-6" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p> Copiar como CSS</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
