import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/card';
import { LanguageIcon} from '@heroicons/react/24/outline';


interface AccessProps {
  passSucees: number;
}


export default function CardTipog() {
  const tipografias = [
    { id: 1, nombre: 'Roboto'},
    { id: 2, nombre: 'Times New Roman'},
    { id: 3, nombre: 'Inter'}
  ];

  return (
    <Card className="flex max-h-[230px] min-h-[210px] w-[300px] flex-col justify-between">
      <div>
        <CardHeader className="flex flex-row justify-between items-center pb-3">
          <CardTitle className="text-[15px] font-medium">Tipografías</CardTitle>
          <LanguageIcon className="w-6 stroke-zinc-500" />
        </CardHeader>
        <CardContent>
        <ul>
            {tipografias.map((tipografia) => (
              <li key={tipografia.id} className="font-medium text-[20px]">{tipografia.nombre}</li>
            ))}
        </ul>
        </CardContent>
      </div>
      <CardFooter>
        <p className="text-[14px] text-zinc-700">
          Familia de tipografias utilizada
        </p>
      </CardFooter>
    </Card>
  );
}
