import {
  Controller,
  Get,
  Param,
  Delete,
  Patch,
  Post,
  Query,
  Body,
  Put,
} from '@nestjs/common';
import { moviesService } from '../services/movies.service';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import moviesOutput from '../models/dto/output/movies.output';
import moviesInput from '../models/dto/input/movies.input';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: moviesService) {}

  @Get()
  @ApiCreatedResponse({ type: moviesOutput, isArray: true })
  findAll(): Promise<moviesOutput[]> {
    return this.moviesService.findAll();
  }

  @Post()
  save(@Body() input: moviesInput) {
    return this.moviesService.save(input);
  }

  @Put(':id')
  @ApiCreatedResponse({ type: moviesOutput })
  update(
    @Param('id') id: string,
    @Body() input: moviesInput,
  ): Promise<moviesOutput> {
    return this.moviesService.update(+id, input);
  }

  @Get(':id')
  @ApiCreatedResponse({ type: moviesOutput })
  findOne(@Param('id') id: string) {
    return this.moviesService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: moviesOutput })
  updateName(@Param('id') id: string, @Query('name') name: string) {
    return this.moviesService.updateName(+id, name);
  }
}
