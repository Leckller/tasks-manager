import taskType from "src/types/task.type";
import userEntity from "src/user/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class taskEntity implements taskType{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    descricao: string;

    @ManyToMany(() => taskEntity, (taskentity) => taskentity.subTarefas)
    subTarefas: taskEntity[];

    @ManyToOne(() => userEntity, (entity) => entity.tarefas)
    usuario: userEntity;

    @Column({default: false})
    completada: boolean;

}