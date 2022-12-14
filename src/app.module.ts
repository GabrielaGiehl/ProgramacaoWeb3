import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users.module';
import { moviesModule } from './modules/movies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfigModule } from './appconfig.module';

import UserEntity from './models/entities/user.entity';
import moviesEntity from './models/entities/movies.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [UserEntity, moviesEntity],
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },
      logging: true,
    }),
    AppConfigModule,
    UsersModule,
    moviesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
