import { IsString } from "class-validator";

export class addTaskDto {

    @IsString()
    titulo: string;

}