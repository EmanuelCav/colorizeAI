import bcryptjs from 'bcryptjs';

export const hashPassword = async (password: string): Promise<string> => {
    const saltPassword = await bcryptjs.genSalt(10)
    return await bcryptjs.hash(password, saltPassword);
}

export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    return await bcryptjs.compare(password, hashedPassword)
}