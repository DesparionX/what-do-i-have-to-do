import type { IToDoList } from "../../data/interfaces/IToDoList";

export interface IUserDto {
  id: string;
  userName: string;
  email: string;
  firstName?: string;
  lastName?: string;
  birthDate?: Date;
  registeredAt: Date;
  age?: number;
  lists?: IToDoList[];
}
