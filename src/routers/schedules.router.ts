import { Router } from "express";
import { verifyAdmin, verifyBody, verifyToken } from "../middlewares/globals.middleware";
import { verifyRealEstateExists, verifyUserSchedulesExists } from "../middlewares/schedules.middleware";

export const schedulesRouter: Router = Router()

schedulesRouter.post('/',verifyToken, verifyBody,verifyRealEstateExists,verifyUserSchedulesExists, verifyUserSchedulesExists)
schedulesRouter.get('/realEstate/:id', verifyToken, verifyAdmin)