import { AuthResult } from "../models/task-results/AuthResult";
import { verifyPasswordAsync } from "../utils/functions/PasswordHasher";
import type { UserService } from "./UserService";
import type { IUserDto } from "../models/dtos/IUserDto";

export class AuthService {
  private _userService: UserService;

  constructor(userService: UserService) {
    this._userService = userService;
  }

  async logInAsync(
    email: string,
    password: string,
    rememberMe: boolean = false
  ): Promise<AuthResult> {
    const user = await this._userService.findByEmailAsync(email);

    if (!user)
      return new AuthResult(false, "Cannot find user with given email.");

    const isValidPassword = await verifyPasswordAsync(
      password,
      user.passwordHash
    );

    if (!isValidPassword) return new AuthResult(false, "Invalid password.");

    const dto: IUserDto = {
      id: user.id!,
      userName: user.userName,
      email: user.email,
      age: user.age,
      birthDate: user.birthDate,
      registeredAt: user.registeredAt,
      firstName: user.firstName,
      lastName: user.lastName,
      lists: user.lists,
    };

    if (rememberMe) {
      localStorage.setItem("user", JSON.stringify(dto));
    }

    return new AuthResult(
      true,
      `${user.userName} successfully logged in.`,
      dto
    );
  }

  logOut() {
    if (!localStorage.getItem("user"))
      throw new Error("There is no currently logged in user.");

    localStorage.removeItem("user");
  }
}
