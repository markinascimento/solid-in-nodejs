import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";

export class ListUsersController {
  constructor(
    private listUsersUseCase: ListUsersUseCase
  ){}

  async handle(request: Request, response: Response): Promise<Response>{
    try {
      const users = await this.listUsersUseCase.execute()
      console.log('Controller => ',{ users })
      return response.json(users)

    } catch (error){
      return response.status(404).json({})
    }
  }
}