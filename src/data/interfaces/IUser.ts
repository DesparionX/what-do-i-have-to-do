import type { IEntity } from "./IEntity";
import type { IToDoList } from "./IToDoList";

export interface IUser extends IEntity<string> {
  id?: string;
  userName: string;
  passwordHash: string;
  email: string;
  birthDate?: Date;
  registeredAt: Date;
  age?: number;
  firstName?: string;
  lastName?: string;
  lists?: IToDoList[];
}
