import { Module } from "@nestjs/common";
import taskService from "./task.service";
import taskController from "./task.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import taskEntity from "./task.entity";
import AuthModule from "src/Auth/Auth.Module";

@Module({
    exports: [],
    controllers: [
        taskController
    ],
    imports: [
        AuthModule,
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