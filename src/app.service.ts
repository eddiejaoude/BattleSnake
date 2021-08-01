import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  info() {
    return {
      apiversion: this.configService.get<string>('API_VERSION'),
      author: this.configService.get<string>('AUTHOR'),
      color: this.configService.get<string>('COLOR'),
      head: this.configService.get<string>('HEAD'),
      tail: this.configService.get<string>('TAIL'),
    };
  }

  start(data) {
    return data;
  }

  end(data) {
    return data;
  }

  move(data) {
    return { move: 'up' };
  }
}
