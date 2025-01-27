import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import taskEntity from "./task.entity";
import taskType from "src/types/task.type";

@Injectable({})
export default class taskService {

    constructor(
        @InjectRepository(taskEntity)
        private readonly taskRepo: Repository<taskEntity>
    ) {}

    public async getTasks (): Promise<taskType[]> {
        try {
            return await this.taskRepo.find();
        } catch (err) {
            throw new BadRequestException("Error: ", err);
        }
    }

    public async addTask(titulo: string) {
        try {
            
            const task = this.taskRepo.create({titulo});
            await this.taskRepo.save(task);

            return "Success: tarefa criada";
            
        } catch (err) {
            throw new BadRequestException("Error: ", err);
        }
        return
    }


}