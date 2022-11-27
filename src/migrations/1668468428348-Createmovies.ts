import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMovies1668552869878783 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('favoritos_filmes');
    await queryRunner.createTable(
      new Table({
        name: 'favoritos_filmes',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'titulo',
            type: 'varchar(200)',
          },
          {
            name: 'imagem',
            type: 'varchar(1000)',
          },
          {
            name: 'criado_em',
            type: 'timestamp',
          },
          {
            name: 'atualizado_em',
            type: 'timestamp',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('favoritos_filmes');
  }
}
