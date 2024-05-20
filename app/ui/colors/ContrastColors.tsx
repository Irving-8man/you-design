'use cliente';
import { useEffect, useState } from 'react';
import { calcularRatio } from '@/app/lib/contrastColor';

interface ContrastColorsProps {
  paleta: Color[]; // Color es la interfaz definida en el componente padre
}

interface Color {
  id: number;
  colorHex: string;
}

//**Componente de contrastes */
export default function ContrastColors({ paleta }: ContrastColorsProps) {
  const Pruebas = [
    { id: 1, prueba: 'Large Text WCAG AA', ratio: 1 / 3 },
    { id: 2, prueba: 'Normal Text WCAG AA', ratio: 1 / 4.5 },
    { id: 3, prueba: 'Large Text WCAG AAA', ratio: 1 / 4.5 },
    { id: 4, prueba: 'Normal Text WCAG AAA', ratio: 1 / 7 },
  ];
  const passChecks = { passCheck: '✅ Pasa', noPassCheck: '❌ No pasa' };

  //estados
  const [selectedColor, setSelectedColor] = useState<Color>(paleta[0]);

  // Actualizar selectedColor cuando cambie la paleta
  useEffect(() => {
    if (paleta.length > 0) {
      setSelectedColor(paleta[0]);
    }
  }, [paleta]);

  const handleChangeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedHex = event.target.value;
    const selected = paleta.find((color) => color.colorHex === selectedHex);
    if (selected) {
      setSelectedColor(selected);
    }
  };

  return (
    <section className="min-h-[500px] min-w-[650px] border-b border-l px-6 pt-6">
      <div className="nowrap mb-[10px] flex flex-row justify-between border-b pb-3">
        <h2 className="text-[24px] font-medium">Contraste de color</h2>
        <div className="flex flex-col gap-[5px]">
          <span className="block p-2 font-medium">Primer plano</span>
          <select name="Selectpaleta" id="paleta" onChange={handleChangeColor} className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
            {paleta.map((color) => (
              <option key={color.id} value={color.colorHex}  className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                {color.colorHex}
              </option>
            ))}
          </select>
        </div>
      </div>

      <article className="mt-4 flex flex-row">
        {/**Verificacion de contraste */}
        <div className="w-full">
          <ul className="mb-[10px] grid w-full grid-cols-[12ch_12ch_12ch_12ch] place-content-end gap-x-[25px]">
            {Pruebas.map((contp, i) => (
              <li key={i} className="flex flex-row justify-center">
                <p className="w-[10ch] text-center text-[14px] font-[500]">
                  {contp.prueba}
                </p>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-[59px]">
            {paleta
              .filter((color) => color.id !== selectedColor.id) // Excluir el color seleccionado
              .map((color, i) => (
                <li
                  key={i}
                  className="grid h-[50px] w-full grid-cols-5 place-content-between"
                >
                  <div className="w-[80px]">
                    <div
                      className="flex h-[50px] w-[80px] flex-col justify-center text-center"
                      style={{
                        backgroundColor: color.colorHex,
                        border: '1px solid #71717a',
                      }}
                    >
                      <p
                        className="text-[16px]"
                        style={{ color: selectedColor?.colorHex }}
                      >
                        Hola
                      </p>
                    </div>
                    <div className="text-center">
                      <p>Fondo</p>
                      <p className="font-medium">{color.colorHex}</p>
                    </div>
                  </div>

                  {Pruebas.map((contpass, i) => (
                    <p key={i} className="w-[10ch] text-center">
                      {calcularRatio(selectedColor.colorHex, color.colorHex) <
                      contpass.ratio
                        ? passChecks.passCheck
                        : passChecks.noPassCheck}
                    </p>
                  ))}
                </li>
              ))}
          </ul>
        </div>
      </article>
    </section>
  );
}
