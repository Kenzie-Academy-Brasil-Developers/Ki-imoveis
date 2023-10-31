import User from "../entities/Users.entity";
import { UserCreate, UserReturn } from "../interfaces/users.interface";
import { userRepo } from "../repositories";
import { userReturnSchema } from "../schemas/users.schema";

export const createUserService = async (data: UserCreate): Promise<UserReturn> => {
    const user: User = userRepo.create(data)
    console.log(user)
    const test = await userRepo.save(user)
    console.log(test)
    return userReturnSchema.parse(user)
}