import { Module } from '@nestjs/common';
import { AuthModule } from './auth.module';
import { AppController } from 'src/controllers/app.controller';
import { AppService } from 'src/services/app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
