import { z } from "zod";
import { createCategorieSchema } from "../schemas/categories.schema";
import { Repository } from "typeorm";
import Category from "../entities/Categories.entity";

export type CreateCategorie = z.infer<typeof createCategorieSchema>

export type CategorieRepo = Repository<Category>