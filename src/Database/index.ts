import { getConnection, getRepository } from 'typeorm';
import { UserSQL } from './entities/User';
import { User } from './constructs/User';
export class Database {
    private user: User;
    public async initialize() {
        await getConnection();
        const userRepo = await  getRepository(UserSQL);
        this.user = new User(userRepo);
    }
}
