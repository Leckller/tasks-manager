import { IsNumber, IsString } from "class-validator";

export class editTaskDto {

    @IsNumber()
    taskId: number;

    @IsString()
    titulo: string;

}