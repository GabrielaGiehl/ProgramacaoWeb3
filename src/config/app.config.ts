import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export default class AppConfig {
  constructor(private configService: ConfigService) {}

  get dbHost(): string {
    return this.configService.get<string>('db_Host');
  }

  get dbPort(): number {
    return this.configService.get<number>('db_Port');
  }

  get dbUsername(): string {
    return this.configService.get<string>('db_Username');
  }

  get dbPassword(): string {
    return this.configService.get<string>('db_Password');
  }

  get dbName(): string {
    return this.configService.get<string>('db_Name');
  }
}
