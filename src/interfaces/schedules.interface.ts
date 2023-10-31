import { z } from "zod";
import { createNewSchudeleSchema } from "../schemas/schedules.schema";
import { Repository } from "typeorm";
import Schedule from "../entities/Schedules.entity";

export type CreateSchedule = z.infer<typeof createNewSchudeleSchema>

export type ScheduleRepo = Repository<Schedule>