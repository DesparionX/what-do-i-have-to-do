import type { IUserDto } from "../../models/dtos/IUserDto";

export interface AuthContextOptions {
  currentUser: IUserDto | null;
  logInAsync: (
    email: string,
    password: string,
    rememberMe: boolean
  ) => Promise<void>;
  logOut: () => void;
}
