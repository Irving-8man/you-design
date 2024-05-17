import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/card';
import { Progress } from "@/app/components/progress"
import { CheckCircleIcon } from '@heroicons/react/24/outline';


interface AccessProps {
  passSucees: number;
}


export default function CardAcces() {
  return (
    <Card className="flex max-h-[220px] min-h-[200px] w-[300px] flex-col justify-between">
      <div>
        <CardHeader className="flex flex-row justify-between items-center pb-5">
          <CardTitle className="text-[15px] font-medium">Accesibilidad</CardTitle>
          <CheckCircleIcon className="w-6 stroke-zinc-500" />
        </CardHeader>
        <CardContent>
          <p><span className="text-[27px] font-bold">33%</span></p>
          <Progress value={33} />
        </CardContent>
      </div>
      <CardFooter>
        <p className="text-[14px] text-zinc-700">Accesibilidad alcanzada en el proyecto</p>
        
      </CardFooter>
    </Card>
  );
}
