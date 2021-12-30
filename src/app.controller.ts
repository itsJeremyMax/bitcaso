import { Response } from 'express';

import { Body, Controller, Post, Res } from '@nestjs/common';

import { AppService } from './app.service';
import { CreateImageDTO } from './dto/CreateImage';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('generate')
  getImage(@Body() body: CreateImageDTO, @Res() res: Response): any {
    return this.appService.getImage(body, res);
  }
}
