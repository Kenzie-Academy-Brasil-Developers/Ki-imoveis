import Address from "../entities/Addresses.entity";
import Category from "../entities/Categories.entity";
import RealEstate from "../entities/RealEstates.entity";
import AppError from "../errors/AppErrors.error";
import { CreateRealEstate} from "../interfaces/realEstates.interface";
import { addressRepo, categoriesRepo, realEstateRepo } from "../repositories";

export const createRealEstateService = async ({ categoryId, address: addressData, ...realEstateData }: CreateRealEstate): Promise<RealEstate> => {
   
    const category: Category | null = await categoriesRepo.findOneBy({id: categoryId})
    
    if(!category) throw new AppError('Category not found', 400)

    const address: Address  = await addressRepo.save(addressData)

    const realEstate: RealEstate = await realEstateRepo.save({...realEstateData, address, category})
   
    return realEstate
}

export const readRealEstatesService = async (): Promise<RealEstate[]> => {
    return await realEstateRepo.find({
        relations: {
            address: true
        }
    })
}