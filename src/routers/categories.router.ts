import { Router } from "express";
import { verifyAdmin, verifyBody, verifyToken } from "../middlewares/globals.middleware";
import { verifyCategorieExists, verifyUniqueCategorieName } from "../middlewares/categories.middleware";
import { createCategorieController, readCategorieController, readRealEstateByCategorieController } from "../controllers/categories.controller";
import { createCategorieSchema } from "../schemas/categories.schema";

export const categorieRouter: Router = Router()

categorieRouter.post('/', verifyBody(createCategorieSchema), verifyToken, verifyUniqueCategorieName, verifyAdmin, createCategorieController)
categorieRouter.get('/', readCategorieController)
categorieRouter.get('/:id/realEstate', verifyCategorieExists, readRealEstateByCategorieController)