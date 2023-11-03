import { NextFunction, Request, Response } from "express";
import Category from "../entities/Categories.entity";
import { categoriesRepo } from "../repositories";
import AppError from "../errors/AppErrors.error";

export const verifyUniqueCategorieName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {name} = req.body
    const categorie: Category | null = await categoriesRepo.findOneBy({name})
    
    if(categorie) throw new AppError('Category already exists', 409)

    return next()
}

export const verifyCategorieExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {id} = req.params
    const categorie: Category | null = await categoriesRepo.findOneBy({id: Number(id)})
    
    if(!categorie) throw new AppError('Category not found', 404)

    return next()
}