import pautasAcces from '../lib/mock/pautasAcces.json';

export type PautaAcces= {
  id: string;
  nivel: string;
  titulo: string;
  descripcion: string;
  web: string;
  completed:boolean
};


export default function getListPautas():PautaAcces[]{
  try{
    const PAUTAS = pautasAcces.pautas;
    return  PAUTAS?.map((pauta) => ({
      id: pauta.id,
      nivel: pauta.nivel,
      titulo: pauta.titulo,
      descripcion: pauta.descripcion,
      web: pauta.web,
      completed:false,
    }));
  }catch{
    throw new Error('Error de petición de pautas')
  }
}