export interface INewUserDto {
    userName: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    birthDate: Date | undefined;
}