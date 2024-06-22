import { User } from "../entities/User";

export interface IUsersRepository {
  finAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}