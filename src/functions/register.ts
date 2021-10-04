import bcrypt from 'bcrypt';
import { getConnection } from 'typeorm';
import { User } from '../entity/User';

export default async function register(email, pw) {
    const encryptedPass = await bcrypt.hash(pw, 15);

    const userToCreate = new User();
    userToCreate.email = email;
    userToCreate.password = encryptedPass;

    await getConnection().getRepository(User).save(userToCreate);
}
