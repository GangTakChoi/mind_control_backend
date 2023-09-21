import * as bcrypt from 'bcrypt';

export async function generatePasswordHash(password): Promise<string> {
  const saltOrRounds = 10;
  const salt = await bcrypt.genSalt(saltOrRounds);
  const hash = bcrypt.hash(password, salt);

  return hash;
}
