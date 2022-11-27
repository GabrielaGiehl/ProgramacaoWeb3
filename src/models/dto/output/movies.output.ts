import { ApiProperty } from '@nestjs/swagger';

export default class MoviesOutput {
  @ApiProperty()
  id: number;

  @ApiProperty()
  titulo: string;

  @ApiProperty()
  imagem: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
