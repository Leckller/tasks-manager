import { Module } from "@nestjs/common";
import taskService from "./task.service";
import taskController from "./task.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import taskEntity from "./task.entity";

@Module({
    controllers: [
        taskController
    ],
    exports: [],
    imports: [
        TypeOrmModule.forFeature([
            taskEntity
        ])
    ],
    providers: [
        taskService
    ],
})
export default class taskModule {

}