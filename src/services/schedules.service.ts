import RealEstate from "../entities/RealEstates.entity";
import User from "../entities/Users.entity";
import AppError from "../errors/AppErrors.error";
import { CreateSchedule } from "../interfaces/schedules.interface";
import { realEstateRepo, schedulesRepo, userRepo } from "../repositories";

export const createSchedulesService = async (data: CreateSchedule, userId: number): Promise<void> => {
    const newDate = new Date(data.date).getDay()
    if((newDate === 0) || (newDate === 6)) throw new AppError('Invalid date, work days are monday to friday', 400)
    const time = Number(data.hour.split(':')[0])
    if((time < 8) || (time > 18)) throw new AppError('Invalid hour, available times are 8AM to 18PM', 400)

    const realEstate: RealEstate | null = await realEstateRepo.findOneBy({id: data.realEstateId})
    const user: User | null = await userRepo.findOneBy({id: userId})

    await schedulesRepo.save({...data, realEstate: realEstate!, user: user!})
}

export const readAllSchedulesService = async (id: number): Promise<RealEstate> => {
    const realEstate: RealEstate | null = await realEstateRepo.findOne({
        where: {
            id
        },
        relations: {
            schedules: {
                user: true
            },
            address: true,
            category: true 
        }
    })

    if(!realEstate) throw new AppError('RealEstate not found', 404)
    
    return realEstate
}