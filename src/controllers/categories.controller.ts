import { Request, Response } from "express";
import { createCategorieService, readCategoriesService, readRealEstateByCategorieService } from "../services/categories.service";

export const createCategorieController = async (req: Request, res: Response): Promise<Response> => {
    const categorie = await createCategorieService(req.body)

    return res.status(201).json(categorie)
}

export const readCategorieController = async (req: Request, res: Response): Promise<Response> => {
    const categories = await readCategoriesService()

    return res.status(200).json(categories)
}

export const readRealEstateByCategorieController = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const realEstates = await readRealEstateByCategorieService(Number(id))

    return res.status(200).json(realEstates)
}