import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/card';
import { SwatchIcon } from '@heroicons/react/24/outline';

interface AccessProps {
  passSucees: number;
}

export default function CardColors() {
  const colores = [
    { id: 1, colorHex: '#14B8A6'},
    { id: 2, colorHex: '#FB7185'},
    { id: 3, colorHex: '#133074'},
    { id: 4, colorHex: '#0E1753'}
  ];

  return (
    <Card className="flex max-h-[230px] min-h-[210px] w-[300px] flex-col justify-between">
      <div>
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <CardTitle className="text-[15px] font-medium">Colores</CardTitle>
          <SwatchIcon className="w-6 stroke-zinc-500" />
        </CardHeader>
        <CardContent>
          <ul>
            {colores.map((color) => (
              <li key={color.id}>
                <div className="flex flex-row justify-between">
                  <p className="font-medium text-[16px]">{color.colorHex}</p>
                  <div className='w-4 h-4' style={{ backgroundColor: color.colorHex ,border: '1px solid #71717a'}}></div>
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
