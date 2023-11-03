import { Router } from "express";
import { verifyAdmin, verifyBody, verifyPermissions, verifyToken } from "../middlewares/globals.middleware";
import { verifyUniqueEmail, verifyUserExists } from "../middlewares/users.middleware";
import { createUserController, deleteUserController, readAllUsersController, updataUsersController } from "../controllers/users.controller";
import { createUserSchema, updateUserSchema } from "../schemas/users.schema";


export const userRouter: Router = Router()

userRouter.post('/', verifyBody(createUserSchema), verifyUniqueEmail, createUserController)
userRouter.get('/', verifyToken, verifyAdmin, readAllUsersController)
userRouter.patch('/:id', verifyToken, verifyUserExists, verifyPermissions, verifyBody(updateUserSchema), updataUsersController)
userRouter.delete('/:id', verifyToken, verifyUserExists, verifyAdmin, deleteUserController)
