import { Injectable } from '@nestjs/common';

import moviesEntity from '../entities/movies.entity';
import moviesOutput from '../dto/output/movies.output';
import moviesInput from '../dto/input/movies.input';

@Injectable()
export default class moviesConverter {
  inputToEntity(input: moviesInput, entity: moviesEntity) {
    entity.id = input.id;
    entity.name = input.name;
    entity.name = input.imagem;
    entity.name = input.user - id;
    entity.createdAt = new Date();
    entity.updatedAt = new Date();

    return entity;
  }

  entityToOutput(entity: moviesEntity): moviesOutput {
    const output = new moviesOutput();

    output.id = entity.id;
    output.name = entity.name;
    output.active = entity.active;
    output.createdAt = entity.createdAt;
    output.updatedAt = entity.updatedAt;

    return output;
  }
}
