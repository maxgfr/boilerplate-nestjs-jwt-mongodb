import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  root(): { [key: string]: string | number } {
    return {
      status: 200,
      message: 'API is working',
      version: process.env.npm_package_version,
    };
  }
}
