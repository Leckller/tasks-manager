import { Module } from "@nestjs/common";
import userController from "./user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import userService from "./user.service";
import userEntity from "./user.entity";

@Module({
    controllers: [userController],
    exports: [userService],
    imports: [
        TypeOrmModule.forFeature([
            userEntity
        ])
    ],
    providers: [
        userService
    ]
})
export default class userModule {}