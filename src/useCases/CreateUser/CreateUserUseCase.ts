import { User } from "../../entities/User";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ){}
  
  async execute(data: ICreateUserRequestDTO) { 
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
    
    if(userAlreadyExists){
      throw new Error('User already exists.')
    }

    const user = new User(data);

    await this.usersRepository.save(user);
    
    await this.mailProvider.sendMail({
      to: { email: data.name, name: data.email },
      from: { email: 'equipe@meuapp.com', name: 'Equipe do meu app' },
      body: '<p> Você já pode fazer login em nossa plataforma. </p>',
      subject: 'Seja bem-vindo a plataforma.',
    })
  }
}