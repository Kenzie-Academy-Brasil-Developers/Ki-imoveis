import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Schedule from "./Schedules.entity";
import Address from "./Addresses.entity";
import Category from "./Categories.entity";

@Entity('realEstates')
export default class RealEstate {
    @PrimaryGeneratedColumn('increment')
    id: number
    
    @Column({ default: false })
    sold: boolean

    @Column({ type:"decimal",precision: 12, scale: 2, default: 0  })
    value: number | string

    @Column({type: 'integer'})
    size: number

    @CreateDateColumn({ type: 'date' })
    createdAt: string

    @UpdateDateColumn({ type: 'date' })
    updatedAt: string

    @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
    schedules: Schedule[]

    @OneToOne(() => Address, (address) => address.realEstate)
    @JoinColumn()
    address: Address

    @ManyToOne(() => Category, (category) => category.realEstate)
    category: Category
}