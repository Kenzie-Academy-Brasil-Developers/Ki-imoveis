import { Router } from "express";
import { verifyAdmin, verifyBody, verifyToken } from "../middlewares/globals.middleware";
import { verifyAddressExists } from "../middlewares/realEstate.middleware";
import { createRealEstateController, readRealEstateController } from "../controllers/realEstates.controller";
import { createRealEstateSchema } from "../schemas/realEstates.schema";

export const realEstateRouter: Router = Router()

realEstateRouter.post('/', verifyToken, verifyAdmin, verifyBody(createRealEstateSchema), verifyAddressExists, createRealEstateController)
realEstateRouter.get('/', readRealEstateController)