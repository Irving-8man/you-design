import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/card';
import { LanguageIcon} from '@heroicons/react/24/outline';



export default function CardTipog() {
  const tipografia = 'Roboto';

  return (
    <Card className="flex max-h-[230px] min-h-[210px] w-[300px] flex-col justify-between">
      <div>
        <CardHeader className="flex flex-row justify-between items-center pb-3">
          <CardTitle className="text-[15px] font-medium">Tipografía</CardTitle>
          <LanguageIcon className="w-6 stroke-zinc-500" />
        </CardHeader>
        <CardContent>
              <p className="font-medium text-[40px]">{tipografia}</p>
        </CardContent>
      </div>
      <CardFooter>
        <p className="text-[14px] text-zinc-700">
          Tipografía utilizada en el proyecto
        </p>
      </CardFooter>
    </Card>
  );
}
