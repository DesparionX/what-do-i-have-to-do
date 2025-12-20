import type { IUserDto } from "../dtos/IUserDto";

export class AuthResult {
  succeeded: boolean;
  message: string;
  user: IUserDto | null;

  constructor(
    succeeded: boolean,
    message: string,
    user: IUserDto | null = null
  ) {
    this.succeeded = succeeded;
    this.message = message;
    this.user = user;
  }
}
