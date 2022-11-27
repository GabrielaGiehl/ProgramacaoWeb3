import { Module } from '@nestjs/common';
import { moviesService } from '../services/movies.service';
import { MoviesController } from '../controllers/movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import moviesEntity from '../models/entities/movies.entity';
import moviesConverter from 'src/models/converters/movies.converter';

@Module({
  imports: [TypeOrmModule.forFeature([moviesEntity])],
  controllers: [MoviesController],
  providers: [moviesService, moviesConverter],
})
export class moviesModule {}
