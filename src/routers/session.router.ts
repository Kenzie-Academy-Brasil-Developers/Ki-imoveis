import { Router } from "express";
import { sessionController } from "../controllers/session.controller";

export const sessioRouter: Router = Router()

sessioRouter.post('/', sessionController)