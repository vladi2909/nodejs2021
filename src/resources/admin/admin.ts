import { getRepository } from 'typeorm';
import { User } from '../../entities/user.model';

export const admin = async (): Promise<void> => {
    const root: User = getRepository(User).create({ login: 'admin', password: 'admin' });
    await getRepository(User).save(root);
}