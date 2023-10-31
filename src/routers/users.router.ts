import { Router } from "express";
import { verifyAdmin, verifyBody, verifyPermissions, verifyToken } from "../middlewares/globals.middleware";
import { verifyUniqueEmail, verifyUserExists } from "../middlewares/users.middleware";
import { createUserController } from "../controllers/users.controller";
import { createUserSchema } from "../schemas/users.schema";

export const userRouter: Router = Router()

userRouter.post('/', verifyBody(createUserSchema), verifyUniqueEmail, createUserController)
userRouter.get('/', verifyToken, verifyAdmin)
userRouter.patch('/:id', verifyBody, verifyToken, verifyUserExists, verifyPermissions)
userRouter.delete('/:id', verifyToken, verifyUserExists, verifyPermissions, verifyAdmin)