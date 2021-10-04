import { getConnection } from 'typeorm';
import { User } from '../entity/User';

export default async function checkUser(email) {
    const user = await getConnection()
        .getRepository(User)
        .createQueryBuilder('user')
        .where('user.email = :email', { email: email })
        .getOne();

    if (!user) return funcStatus.NOT;
    return funcStatus.EXISTS;
}

export enum funcStatus {
    NOT,
    EXISTS,
}
