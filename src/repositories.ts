import Category from "./entities/Categories.entity";
import { AppDataSource } from "./data-source";
import Address from "./entities/Addresses.entity";
import User from "./entities/Users.entity";
import RealEstate from "./entities/RealEstates.entity";
import Schedule from "./entities/Schedules.entity";
import { ScheduleRepo } from "./interfaces/schedules.interface";
import { CategorieRepo } from "./interfaces/categories.interface";
import { AddressRepo, RealEstateRepo } from "./interfaces/realEstates.interface";
import { UserRepo } from "./interfaces/users.interface";

export const categoriesRepo: CategorieRepo = AppDataSource.getRepository(Category)
export const addressRepo: AddressRepo = AppDataSource.getRepository(Address)
export const userRepo: UserRepo = AppDataSource.getRepository(User)
export const realEstateRepo: RealEstateRepo = AppDataSource.getRepository(RealEstate)
export const schedulesRepo: ScheduleRepo = AppDataSource.getRepository(Schedule)