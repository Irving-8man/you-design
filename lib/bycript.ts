import bcrypt from 'bcrypt'

/**
 * Hash un password usando bcrypt
 * @param unHashed {string} - El password en texto plano a hash.
 * @return {Promise<string>} - El password hashed.
 */
export async function hashPass(unHash:string): Promise<string>{
  //Saltos
  const unSalt = 10
  return bcrypt.hash(unHash,unSalt)
}

/**
 * Verificar un password con un hash
 * @param password {string} - El password en texto plano para verify.
 * @param hash {string} - El hash para verificar.
 * @return {Promise<boolean>} - Si es el mismo password o no.
 */
export async function verificarPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}