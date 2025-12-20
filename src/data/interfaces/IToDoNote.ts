import type { IEntity } from "./IEntity";
import type { IToDoList } from "./IToDoList";

export interface IToDoNote extends IEntity<string> {
  id: string;
  content: string;
  list?: IToDoList;
  listId?: string;
  addedAt: Date;
  isCompleted: boolean;
  completedAt?: Date;
}
