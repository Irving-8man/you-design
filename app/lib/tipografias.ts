import responseTipografias from '@/app/lib/mock/webfonts.json';

export interface interTipografia {
  family: string;
}

export function getAPITipografias():interTipografia[] {
  try{
    const TIPOGRAFIAS = responseTipografias.items;
    //buena practica de apis
    return  TIPOGRAFIAS?.map((tipografia) => ({
      family: tipografia.family,
    }));
  }catch{
    throw new Error('Error de petición de tipografias')
  }
}
