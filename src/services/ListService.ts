import type { FakeDbContext } from "../data/FakeDbContext";
import { ToDoList } from "../data/ToDoList";
import type { IToDoListDto } from "../models/dtos/IToDoListDto";

export class ListService {
  private readonly _context: FakeDbContext;

  constructor(context: FakeDbContext) {
    this._context = context;
  }

  async getUserListsAsync(userId: string): Promise<ToDoList[]> {
    const lists = await this._context.lists.filter((l) => l.userId === userId);

    if (!lists) throw new Error("Current user doesn't have any lists.");

    return lists;
  }

  async getListByIdAsync(listId: string, userId: string): Promise<ToDoList> {
    // This ensures that user cannot edit other user's list.
    const list = await this._context.lists.filter(
      (l) => l.id === listId && l.userId === userId
    );

    if (!list) throw new Error("There is no such list with given id.");

    return list[0];
  }

  async additListAsync(isNew: boolean, listDto: IToDoListDto): Promise<void> {
    const list: ToDoList = {
      id: listDto.id,
      title: listDto.title,
      createdAt: listDto.createdAt,
      user: listDto.user,
      userId: listDto.userId,
      notes: listDto.notes,
      updatedAt: listDto.updatedAt,
    };

    if (isNew) {
      this._context.lists.addAsync(list);
    } else {
      this._context.lists.updateAsync(list);
    }

    this._context.saveChanges();
  }

  async deleteListAsync(listId: string): Promise<boolean> {
    const list = await this._context.lists.findByIdAsync(listId);
    if (!list) throw new Error("There is no such list with given ID.");

    this._context.lists.removeAsync(list);
    this._context.saveChanges();
    return true;
  }

  async changeNoteStatusAsync(
    listId: string,
    noteId: string,
    isCompleted: boolean
  ): Promise<boolean> {
    const list = await this._context.lists.findByIdAsync(listId);

    if (!list) throw new Error("There is no such list with given ID.");

    const note = list.notes!.find((n) => n.id === noteId);

    if (!note) throw new Error("There is no such note with given ID.");

    note.isCompleted = isCompleted;
    note.completedAt = new Date();

    const noteIndex = list.notes!.findIndex((n) => n.id === note.id);
    if (noteIndex >= 0) {
      list.notes![noteIndex] = note;
      this._context.lists.updateAsync(list);
      this._context.saveChanges();
      return true;
    }

    return false;
  }
}
