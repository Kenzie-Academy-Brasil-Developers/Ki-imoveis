import { Router } from "express";
import { verifyAdmin, verifyToken } from "../middlewares/globals.middleware";
import { verifyCategorieExists, verifyUniqueCategorieName } from "../middlewares/categories.middleware";

export const categorieRouter: Router = Router()

categorieRouter.post('/', verifyToken, verifyUniqueCategorieName, verifyAdmin)
categorieRouter.get('/')
categorieRouter.get('/:id/realEstate', verifyCategorieExists)