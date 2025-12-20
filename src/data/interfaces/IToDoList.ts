import type { IEntity } from "./IEntity";
import type { IToDoNote } from "./IToDoNote";
import type { IUser } from "./IUser";

export interface IToDoList extends IEntity<string> {
  id: string;
  title: string;
  user?: IUser;
  userId?: string;
  notes?: IToDoNote[];
  createdAt: Date;
  updatedAt?: Date;
}
