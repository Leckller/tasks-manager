import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { Repository } from "typeorm";
import userEntity from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export default class userService {

    constructor (
        @InjectRepository(userEntity)
        private readonly userRepo: Repository<userEntity> 
    ) {}

    async createUser (user: {nome: string, senha: string}) {

        try {
            
            const {nome, senha} = user;

            const usuarioExistente = await this.userRepo.findOne({where: {nome}});

            const novoUsuario = this.userRepo.create({nome, senha});

            await this.userRepo.save(novoUsuario);

            return "Usuário criado com sucesso."

        } catch (error) {

            throw new InternalServerErrorException(`[Error - create user]: ${error}`)

        }


    }
    
}