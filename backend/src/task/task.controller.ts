import { Body, Controller, Get, Post } from "@nestjs/common";
import taskType from "src/types/task.type";
import taskService from "./task.service";
import { addTaskDto } from "./DTOs/addTask.dto";

@Controller({
    path: 'task'
})
export default class taskController {

    constructor(
        private readonly taskService: taskService
    ) { }

    @Get()
    async getTasks (): Promise<taskType[]> {

        return await this.taskService.getTasks();

    }

    @Post()
    async addTask (@Body() {titulo}: addTaskDto): Promise<string> {

        return await this.taskService.addTask(titulo);

    }

}