import taskType from "src/types/task.type";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class taskEntity implements taskType{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column({default: false})
    completada: boolean;

}