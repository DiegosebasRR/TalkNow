import { Auth } from "./auth.interface";

export interface User extends Auth {
  firtName: string;
  lastName: string;
  telephone: number;
  birthDate: string;
  gender: "female" | "male";
}
