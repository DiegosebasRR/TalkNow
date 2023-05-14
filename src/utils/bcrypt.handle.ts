import { hash, compare } from "bcryptjs";

const encrypted = async (pass: string) => {
  const passwordHash = await hash(pass, 8);
  return passwordHash;
};

const decrypt = async (pass: string, passHash: string) => {
  const isCorrect = await compare(pass, passHash);
  return isCorrect;
};

export { encrypted, decrypt };
