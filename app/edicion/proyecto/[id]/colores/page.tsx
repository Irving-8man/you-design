'use client';
import { Button } from '@/app/components/button';
import Save from '@/app/ui/icons/save';
import { ClipboardIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { Input } from '@/app/components/input';
import { calcularRatio } from '@/app/lib/contrastColor';


interface ContrastColorsProps {
  paleta: Color[]; // Color es la interfaz definida en el componente padre
}


//**Componente de contrastes */
function ContrastColors({ paleta }: ContrastColorsProps) {
  let paletaUser = [
    { id: 1, colorHex: '#14B8A6' },
    { id: 2, colorHex: '#FB7185' },
    { id: 3, colorHex: '#133074' },
    { id: 4, colorHex: '#0E1753' },
  ];

  const Pruebas = [
    { id: 1, prueba: 'Large Text WCAG AA', ratio: 1 / 3 },
    { id: 2, prueba: 'Normal Text WCAG AA', ratio: 1 / 4.5 },
    { id: 3, prueba: 'Large Text WCAG AAA', ratio: 1 / 4.5 },
    { id: 4, prueba: 'Normal Text WCAG AAA', ratio: 1 / 7 },
  ];

  const passChecks = { passCheck: '✅ Pasa', noPassCheck: '❌ No pasa' };

  const [colorPlano, setPlano] = useState('#000000');

  return (
    <section className="min-h-[600px] min-w-[650px] border-b border-l px-6 pt-6">

      <div className="nowrap flex flex-row justify-between mb-[10px] border-b pb-3">
        <h2 className="text-[24px] font-medium">Contraste de color</h2>
        <div className="flex flex-col gap-[5px]">
          <span className="block p-2 font-medium">Primer plano</span>
          <select name="" id="">
            {paleta.map((color, i) => (
              <option key={i + 1} value={color.colorHex}>
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
                <p className="w-[10ch] text-center font-[500] text-[14px]">{contp.prueba}</p>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-[59px]">
            {paleta.map((color, i) => (
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
                      style={{ color: colorPlano }}
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
                    {calcularRatio(colorPlano, color.colorHex) < contpass.ratio
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


interface Color {
  id: number;
  colorHex: string;
}



export default function Page({ params }: { params: { id: string } }) {
  let coloresUser = [
    { id: 1, colorHex: '#14B8A6' },
    { id: 2, colorHex: '#FB7185' },
    { id: 3, colorHex: '#133074' },
    { id: 4, colorHex: '#0E1753' },
  ];
  const [paletaUser, setPaletaUser] = useState<Color[]>(coloresUser);

  const handleColorChange = (id: number, newColor: string) => {
    setPaletaUser((prevPalette) =>
      prevPalette.map((color) =>
        color.id === id ? { ...color, colorHex: newColor } : color,
      ),
    );
  };

  const copyToClipboard = () => {
    const cssFormat =
      paletaUser.reduce((acc, color, index) => {
        return `${acc}color${index + 1}: ${color.colorHex};\n`;
      }, ':root {\n') + '}';

    navigator.clipboard.writeText(cssFormat);
  };

  return (
    <div className="flex flex-row justify-between px-6 pb-8">
      <section className="nowrap min-w-[450px] pt-6">
        <div className="nowrap flex flex-row justify-between">
          <h1 className="text-[30px] font-bold">Colores</h1>
          <Button className="row flex gap-[5px]">
            <Save />
            Guardar
          </Button>
        </div>

        <article className="mt-[30px] rounded-xl border bg-card px-3 py-5 text-card-foreground shadow">
          <div className="p-6 pt-0">
            <div className="nowrap mb-4 flex flex-row justify-between">
              <p className="text-[24px] font-medium">Paleta de colores</p>
              <Button
                variant="outline"
                className="row flex gap-[5px] text-[14px]"
                onClick={copyToClipboard}
              >
                <ClipboardIcon className="w-6" />
                Copiar CSS
              </Button>
            </div>

            <ul>
              {paletaUser.map((color, i) => (
                <li key={i + 1}>
                  <div className="flex flex-row justify-between p-3">
                    <div className="flex flex-col gap-[2px]">
                      <p className="font-medium">Color {i + 1}</p>
                      <p className="text-[16px]">{color.colorHex}</p>
                    </div>

                    <Input
                      type="color"
                      className="h-[40px] w-[60px] p-0"
                      value={color.colorHex}
                      onChange={(e) => {
                        handleColorChange(color.id, e.target.value);
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <ContrastColors paleta={paletaUser}/>
    </div>
  );
}
