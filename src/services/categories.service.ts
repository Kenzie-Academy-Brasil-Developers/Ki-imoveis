import Category from "../entities/Categories.entity";
import AppError from "../errors/AppErrors.error";
import { CreateCategorie, readAllCategories } from "../interfaces/categories.interface";
import { categoriesRepo } from "../repositories";

export const createCategorieService = async (data: CreateCategorie ): Promise<Category> => {
    return await categoriesRepo.save(data)
}

export const readCategoriesService = async (): Promise<readAllCategories> => {
    return await categoriesRepo.find()
}

export const readRealEstateByCategorieService = async (id: number): Promise<Category> => {
    const categorie: Category | null = await categoriesRepo.findOne({
        where: {
            id
        },
        relations: {
            realEstate: true
        }
    })
    
    return categorie!
}