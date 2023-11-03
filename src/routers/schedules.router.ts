import { Router } from "express";
import { verifyAdmin, verifyBody, verifyToken } from "../middlewares/globals.middleware";
import { verifyRealEstateExists, verifyRealEstateSchedulesExists, verifyUserSchedulesExists } from "../middlewares/schedules.middleware";
import { createScheduleController, readAllSchedulesRealEstateController } from "../controllers/schedules.controller";
import { createNewSchudeleSchema } from "../schemas/schedules.schema";

export const schedulesRouter: Router = Router()

schedulesRouter.post('/',verifyToken, verifyBody(createNewSchudeleSchema),verifyUserSchedulesExists, verifyRealEstateSchedulesExists, verifyRealEstateExists, createScheduleController)
schedulesRouter.get('/realEstate/:id', verifyToken, verifyAdmin, readAllSchedulesRealEstateController)