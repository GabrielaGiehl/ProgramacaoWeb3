import { Injectable } from '@nestjs/common';

import moviesEntity from '../entities/movies.entity';
import moviesOutput from '../dto/output/movies.output';
import moviesInput from '../dto/input/movies.input';

@Injectable()
export default class moviesConverter {
  inputToEntity(input: moviesInput, entity: moviesEntity) {
    entity.id = input.id;
    entity.titulo = input.titulo;
    entity.imagem = input.imagem;
    entity.createdAt = new Date();
    entity.updateAt = new Date();

    return entity;
  }

  entityToOutput(entity: moviesEntity): moviesOutput {
    const output = new moviesOutput();

    output.id = entity.id;
    output.titulo = entity.titulo;
    output.imagem = entity.imagem;
    output.createdAt = entity.createdAt;
    output.updatedAt = entity.updateAt;

    return output;
  }
}
