import { IsNumber } from "class-validator";

export class removeTaskDto {

    @IsNumber()
    taskId: number;

}