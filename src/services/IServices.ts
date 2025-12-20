import type { AuthService } from "./AuthService";
import type { ListService } from "./ListService";
import type { UserService } from "./UserService";

export interface IServices {
    userService: UserService;
    authService: AuthService;
    listService: ListService;
}