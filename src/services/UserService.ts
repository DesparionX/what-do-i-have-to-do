import type { FakeDbContext } from "../data/FakeDbContext";
import { User } from "../data/User";
import type { INewUserDto } from "../models/dtos/INewUserDto";
import { hashPasswordAsync } from "../utils/functions/PasswordHasher";

export class UserService {
  private _context: FakeDbContext;

  constructor(context: FakeDbContext) {
    this._context = context;
  }

  async registerUserAsync(newUser: INewUserDto): Promise<User> {
    if (!newUser) throw new Error("User fields are empty !");

    const user: User = {
      id: crypto.randomUUID(),
      userName: newUser.userName,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      birthDate: newUser.birthDate,
      email: newUser.email,
      registeredAt: new Date(),
      lists: [],
      passwordHash: await hashPasswordAsync(newUser.password),
    };

    await this._context.users.addAsync(user);
    this._context.saveChanges();

    return user;
  }

  async findByIdAsync(id: string): Promise<User> {
    if (!id) throw new Error("ID is null or empty.");

    const user = await this._context.users.findByIdAsync(id);

    if (!user) throw new Error(`User with ID:${id} does not exist.`);

    return user;
  }

  async findByEmailAsync(email: string): Promise<User> {
    if (!email) throw new Error("Email is null or empty.");

    const user = this._context.users.find((u) => u.email === email);

    if (!user) throw new Error(`User with email: ${email} does not exist.`);

    return user;
  }
}
