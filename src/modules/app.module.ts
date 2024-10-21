import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from 'src/controllers/app.controller';
import { AppService } from 'src/services/app.service';
import { AuthModule } from './auth.module';
import { DbService } from 'src/services/db.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, DbService],
})
export class AppModule {}
