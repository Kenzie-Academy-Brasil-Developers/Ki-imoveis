import { Router } from "express";
import { userRouter } from "./users.router";
import { schedulesRouter } from "./schedules.router";
import { realEstateRouter } from "./realEstate.router";
import { sessioRouter } from "./session.router";
import { categorieRouter } from "./categories.router";

export const routes: Router = Router()

routes.use('/users', userRouter)
routes.use('/schedules', schedulesRouter)
routes.use('/realEstate', realEstateRouter)
routes.use('/login', sessioRouter)
routes.use('/categories', categorieRouter)