// import { hashPasswordAsync } from "../utils/PasswordHasher";
import { FakeDbSet } from "./FakeDbSet";
import { ToDoList } from "./ToDoList";
import { ToDoNote } from "./ToDoNote";
import { User } from "./User";

export class FakeDbContext {
  users = new FakeDbSet<User>();
  lists = new FakeDbSet<ToDoList>();
  notes = new FakeDbSet<ToDoNote>();

  constructor() {
    // this.seedAdmin();
    this.loadDb();
  }

  // private async seedAdmin() {
  //   const adminUser: User = {
  //     id: crypto.randomUUID(),
  //     userName: "manolov",
  //     firstName: "Deyvid",
  //     lastName: "Manolov",
  //     passwordHash: await hashPasswordAsync("admin1234"),
  //     age: 31,
  //     email: "wihtd@gmail.com",
  //     registeredAt: new Date(),
  //   };

  //   this.users.addAsync(adminUser);
  // }

  // Fake persisting the DB.

  private loadDb() {
    const savedDb = localStorage.getItem("db-context");

    if (savedDb) {
      const parsedDb: FakeDbContext = JSON.parse(savedDb);

      const users = new FakeDbSet<User>();
      users.push(...parsedDb.users);

      const lists = new FakeDbSet<ToDoList>();
      lists.push(...parsedDb.lists);

      const notes = new FakeDbSet<ToDoNote>();
      notes.push(...parsedDb.notes);

      this.users = users;
      this.lists = lists;
      this.notes = notes;
    }
  }

  saveChanges() {
    localStorage.setItem("db-context", JSON.stringify(this));
  }
}
