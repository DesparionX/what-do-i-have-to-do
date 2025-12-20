import type { IToDoList } from "./interfaces/IToDoList";
import type { IToDoNote as IToDoNote } from "./interfaces/IToDoNote";

export class ToDoNote implements IToDoNote {
  id: string = crypto.randomUUID();
  content: string = "";
  list?: IToDoList;
  listId?: string;
  addedAt: Date = new Date();
  isCompleted: boolean = false;
  completedAt?: Date;
}
