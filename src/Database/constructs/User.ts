import { UserSQL } from '../entities/User';
import { Repository } from 'typeorm';

export class User {
    static _instance: User;
    private repo: Repository<UserSQL>;

    public constructor(repo: Repository<UserSQL>) {
        this.repo = repo;
        User._instance = this;
    }
}