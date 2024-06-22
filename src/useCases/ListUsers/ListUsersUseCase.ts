import { IUsersRepository } from "../../repositories/IUsersRepository";

export class ListUsersUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ){}
  
  async execute(){
    const users = await this.usersRepository.finAll();
    console.log('UseCase => ', { users })
    return users.length > 0 ? users : ['ok']
  }
}