import { Module } from '@nestjs/common';
import { MotionController } from './app.controller';
import { MotionService } from './app.service';

@Module({
  imports: [],
  controllers: [MotionController],
  providers: [MotionService],
})
export class AppModule {}