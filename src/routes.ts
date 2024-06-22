import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { listUsersController } from "./useCases/ListUsers";

const router = Router()

router.get('/users', (request, response) => {
  return listUsersController.handle(request, response)
})

router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

export { router }