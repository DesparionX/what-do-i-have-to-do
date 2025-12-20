import bcrypt from 'bcryptjs';

export async function hashPasswordAsync(pwd: string): Promise<string> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(pwd, saltRounds);

    return hashedPassword;
}

export async function verifyPasswordAsync(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
}