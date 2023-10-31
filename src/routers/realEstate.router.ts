import { Router } from "express";
import { verifyAdmin, verifyBody, verifyToken } from "../middlewares/globals.middleware";
import { verifyAddressExists } from "../middlewares/realEstate.middleware";

export const realEstateRouter: Router = Router()

realEstateRouter.post('/', verifyToken, verifyAdmin, verifyBody, verifyAddressExists)
realEstateRouter.get('/')