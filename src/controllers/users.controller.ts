import { Request, Response } from "express";
import { UserReturn } from "../interfaces/users.interface";
import { createUserService } from "../services/users.service";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
    console.log(req.body)
    const user: UserReturn = await createUserService(req.body)
    
    return res.status(201).json(user)
}