import { Body, Controller, Delete, Get, Patch, Post } from "@nestjs/common";
import taskType from "src/types/task.type";
import taskService from "./task.service";
import { addTaskDto } from "./DTOs/addTask.dto";
import { editTaskDto } from "./DTOs/editTask.dto";
import { removeTaskDto } from "./DTOs/removeTask.dto";

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

    @Delete()
    async removeTask (@Body() {taskId}: removeTaskDto): Promise<string> {

        return await this.taskService.removeTask(+taskId);

    }

    @Patch()
    async editTask (@Body() {titulo, taskId}: editTaskDto): Promise<string> {

        return await this.taskService.editTask(+taskId, titulo);

    }


}