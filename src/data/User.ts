import type { IToDoList } from "./interfaces/IToDoList";
import type { IUser } from "./interfaces/IUser";

export class User implements IUser {
  id?: string = crypto.randomUUID();
  userName: string = "";
  passwordHash: string = "";
  email: string = "";
  birthDate?: Date;
  registeredAt: Date = new Date();
  age?: number = 0;
  firstName?: string = "";
  lastName?: string = "";
  lists?: IToDoList[] = [];
}
