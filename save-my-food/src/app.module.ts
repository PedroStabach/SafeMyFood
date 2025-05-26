import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD

@Module({
  imports: [],
=======
import { userModule } from './user/user.module';

@Module({
  imports: [userModule],
>>>>>>> development
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
