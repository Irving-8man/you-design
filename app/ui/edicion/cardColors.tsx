import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/card';
import { SwatchIcon } from '@heroicons/react/24/outline';

interface PaletaProps {
  colors: string[];
}

export default function CardColors(props:PaletaProps) {

  return (
    <Card className="flex max-h-[230px] min-h-[210px] w-[300px] flex-col justify-between">
      <div>
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <CardTitle className="text-[15px] font-medium">Colores</CardTitle>
          <SwatchIcon className="w-6 stroke-zinc-500" />
        </CardHeader>
        <CardContent>
          <ul>
            {props.colors.map((color,idx) => (
              <li key={idx}>
                <div className="flex flex-row justify-between">
                  <p className="font-medium text-[16px]">{color}</p>
                  <div className='w-4 h-4' style={{ backgroundColor: color,border: '1px solid #71717a'}}></div>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </div>
      <CardFooter>
        <p className="text-[14px] text-zinc-700">
          Paleta de colores utilizada
        </p>
      </CardFooter>
    </Card>
  );
}
