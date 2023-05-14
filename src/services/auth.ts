import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";

import UserModel from "../models/auth";
import { encrypted, decrypt } from "../utils/bcrypt.handle";

const registerNewUser = async ({
  firtName,
  lastName,
  birthDate,
  telephone,
  gender,
  email,
  password,
}: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "ALREDY_USER";
  const passHash = await encrypted(password);
  const registerNewUser = await UserModel.create({
    firtName,
    lastName,
    birthDate,
    telephone,
    gender,
    email,
    password: passHash,
  });
  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "NOT_FOUNT_USER";
  const passwordHash = checkIs.password;
  const isCorrect = await decrypt(password, passwordHash);
  if (!isCorrect) return "PASSWORD_INCORRECT";
  return checkIs;
};

export { registerNewUser, loginUser };
