import { z } from "zod";
import { createCategorieSchema, readAllCategorieSchema } from "../schemas/categories.schema";
import { Repository } from "typeorm";
import Category from "../entities/Categories.entity";

export type CreateCategorie = z.infer<typeof createCategorieSchema>
export type readAllCategories = z.infer<typeof readAllCategorieSchema>
export type CategorieRepo = Repository<Category>