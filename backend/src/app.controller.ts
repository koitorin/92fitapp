import { Controller, Post, Body } from '@nestjs/common';
import { MotionService } from './app.service';

@Controller('motion')
export class MotionController {
  constructor(private readonly motionService: MotionService) {}

  @Post('process')
  async processMovement(@Body() motionData: any) {
    return this.motionService.processMotion(motionData);
  }
}