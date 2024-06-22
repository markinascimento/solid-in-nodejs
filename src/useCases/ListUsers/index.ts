import { ListUsersUseCase } from "./ListUsersUseCase";
import { ListUsersController } from './ListUsersController';
import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepository';

const usersRepository = new PostgresUsersRepository()
const listUsersUseCase = new ListUsersUseCase(usersRepository)

const listUsersController = new ListUsersController(listUsersUseCase);

export { listUsersController }