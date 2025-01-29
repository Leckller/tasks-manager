import taskEntity from "src/task/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "user"})
export default class userEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    senha: string;

    @OneToMany(() => taskEntity, (entity) => entity.usuario)
    tarefas: taskEntity[];
}