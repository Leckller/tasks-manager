import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import taskEntity from './task/task.entity';
import taskModule from './task/task.module';

@Module({
  imports: [
    taskModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'task_manager.db',
      entities: [taskEntity],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
