import type { IToDoList } from "./interfaces/IToDoList";
import type { IToDoNote } from "./interfaces/IToDoNote";
import type { IUser } from "./interfaces/IUser";

export class ToDoList implements IToDoList {
  id: string = crypto.randomUUID();
  title: string = "";
  user?: IUser;
  userId?: string;
  notes?: IToDoNote[] = [];
  createdAt: Date = new Date();
  updatedAt?: Date;
}
