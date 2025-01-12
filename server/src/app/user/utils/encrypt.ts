import * as bcrypt from 'bcryptjs';

export const hashPassword = async (password: string): Promise<string> => {
    const saltPassword = await bcrypt.genSalt(8)
    return await bcrypt.hash(password, saltPassword);
}

export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(password, hashedPassword)
}