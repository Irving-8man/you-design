export interface Ratio {
  id: number;
  nombre: string;
  valor: string;
}

export function getListRatios(): Ratio[] {
  const RATIOS: Ratio[] = [
    { id: 1, nombre: "Minor Second (15:16)", valor: (16 / 15).toString() },
    { id: 2, nombre: "Major Second (8:9)", valor: (9 / 8).toString() },
    { id: 3, nombre: "Minor Third (5:6)", valor: (6 / 5).toString() },
    { id: 4, nombre: "Major Third (4:5)", valor: (5 / 4).toString() },
    { id: 5, nombre: "Perfect Fourth (3:4)", valor: (4 / 3).toString() },
    { id: 6, nombre: "Aug. Fourth/Dimin. Fifth (1:√2)", valor: Math.sqrt(2).toString() },
    { id: 7, nombre: "Perfect Fifth (2:3)", valor: (3 / 2).toString() },
    { id: 8, nombre: "Minor Sixth (5:8)", valor: (8 / 5).toString() },
    { id: 9, nombre: "Golden Section (1:1.618)", valor: "1.618" },
    { id: 10, nombre: "Major Sixth (3:5)", valor: (5 / 3).toString() },
    { id: 11, nombre: "Minor Seventh (9:16)", valor: (16 / 9).toString() },
    { id: 12, nombre: "Major Seventh (8:15)", valor: (15 / 8).toString() },
    { id: 13, nombre: "Octave (1:2)", valor: "2" },
    { id: 14, nombre: "Major Tenth (2:5)", valor: (5 / 2).toString() },
    { id: 15, nombre: "Major Eleventh (3:8)", valor: (8 / 3).toString() },
    { id: 16, nombre: "Major Twelfth (1:3)", valor: "3" },
    { id: 17, nombre: "Double Octave (1:4)", valor: "4" },
  ];

  return RATIOS;
}



export interface Recomen {
  id: number;
  categoria: string;
  weight: string;
}

export function getListRecomendaciones(): Recomen[]{
  const LISTRECOMENDADOS: Recomen[] = [
    {id:1,categoria:'H1',weight:'400'},
    {id:2,categoria:'H2',weight:'400'},
    {id:3,categoria:'H3',weight:'400'},
    {id:4,categoria:'H4',weight:'400'},
    {id:5,categoria:'Subtitulo_1',weight:'400'},
    {id:6,categoria:'Subtitulo_2',weight:'600'},
    {id:7,categoria:'Body',weight:'400'},
    {id:8,categoria:'Boton',weight:'600'},
    {id:9,categoria:'Caption',weight:'400'},
    {id:10,categoria:'Overline',weight:'400'},
  ];

  return LISTRECOMENDADOS;
}
