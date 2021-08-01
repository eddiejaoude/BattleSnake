import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  info() {
    return this.appService.info();
  }

  @HttpCode(200)
  @Post('start')
  start(@Body() body) {
    return this.appService.start(body);
  }

  @HttpCode(200)
  @Post('end')
  end(@Body() body) {
    return this.appService.end(body);
  }

  @HttpCode(200)
  @Post('move')
  move(@Body() body) {
    return this.appService.move(body);
  }
}
