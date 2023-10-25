// ./src/app.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'The Docker has been changed';
    // return 'Hello World!';
  }
}
