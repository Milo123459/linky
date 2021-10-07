import { getConnection } from 'typeorm';
import { User } from '../entity/User';

export default async function checkUser(email:string, returnUser=false) {
    const user = await getConnection()
        .getRepository(User)
        .createQueryBuilder('user')
        .where('user.email = :email', { email: email })
        .getOne();

    if (!user) return funcStatus.NOT;
    if(returnUser === false) {
        return funcStatus.EXISTS;
    } else {
        return user;
    }
}

export enum funcStatus {
    NOT,
    EXISTS,
}
