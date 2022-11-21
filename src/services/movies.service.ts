import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import moviesEntity from '../models/entities/movies.entity';
import { InjectRepository } from '@nestjs/typeorm';

import UsersOutput from '../models/dto/output/users.output';
import moviesConverter from '../models/converters/movies.converter';
import UsersInput from '../models/dto/input/users.input';

@Injectable()
export class moviesService {
  constructor(
    @InjectRepository(moviesEntity)
    private readonly userRepo: Repository<moviesEntity>,
    private readonly moviesConverter: moviesConverter,
  ) {}

  async findAll(): Promise<UsersOutput[]> {
    const moviesEntities = await this.userRepo.find();

    const outputList = moviesEntities.map((entity) => {
      return this.moviesConverter.entityToOutput(entity);
    });

    return outputList;
  }

  async save(input: UsersInput) {
    const entity = new moviesEntity();

    const convertedEntity = this.moviesConverter.inputToEntity(input, entity);

    const savedEntity = await this.userRepo.save(convertedEntity);

    const output = this.moviesConverter.entityToOutput(savedEntity);

    return output;
  }

  async update(id: number, input: UsersInput): Promise<UsersOutput> {
    const moviesEntity = await this.userRepo.findOne({ where: { id: id } });

    const convertedEntity = this.moviesConverter.inputToEntity(
      input,
      moviesEntity,
    );

    const savedEntity = await this.userRepo.save(convertedEntity);

    const output = this.moviesConverter.entityToOutput(savedEntity);

    return output;
  }

  async findOne(id: number) {
    const moviesEntity = await this.userRepo.findOne({ where: { id: id } });

    const output = this.moviesConverter.entityToOutput(moviesEntity);

    return output;
  }

  async updateName(id: number, name: string) {
    const moviesEntity = await this.userRepo.findOne({ where: { id } });

    moviesEntity.titulo = name;

    const moviesSaved = await this.userRepo.save(moviesEntity);

    const output = this.moviesConverter.entityToOutput(moviesSaved);

    return output;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
