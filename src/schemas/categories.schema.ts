import { z } from "zod";

export const categorieSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45)
})

export const createCategorieSchema = categorieSchema.omit({id: true})
export const readAllCategorieSchema = categorieSchema.array()