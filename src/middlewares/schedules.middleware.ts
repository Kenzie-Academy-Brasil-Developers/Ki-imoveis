import { NextFunction, Request, Response } from "express";
import { realEstateRepo, schedulesRepo } from "../repositories";
import AppError from "../errors/AppErrors.error";
import Schedule from "../entities/Schedules.entity";
import RealEstate from "../entities/RealEstates.entity";

export const verifyRealEstateExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const {realEstateId} = req.body
  const realEstate: RealEstate | null = await realEstateRepo.findOne({
    where: {
      id: Number(realEstateId)
    }
  })

  if(!realEstate) throw new AppError('realEstate not found', 404)

  return next()
}

export const verifyRealEstateSchedulesExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {realEstateId, hour, date} = req.body
    const schedules: Schedule | null = await schedulesRepo.findOne({
        where: {
            realEstate: {
                id: Number(realEstateId)
            },
            hour,
            date
        }
    })
    if(schedules) throw new AppError('Scheduling to this real estate at this date and time already exists', 409)

    next()
}

export const verifyUserSchedulesExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let {sub} = res.locals.decoded
    sub = Number(sub)
    const {hour, date} = req.body
    const schedule: Schedule | null = await schedulesRepo.findOne({
      where: {
        user: {
          id: sub
        },
        date,
        hour
      },
    })
  
    if(schedule) throw new AppError('User scheduling to this real estate at this date and time already exists', 409)
  
    return next()
  }