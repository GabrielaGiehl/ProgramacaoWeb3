import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('movies')
export default class moviesEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'titulo', type: 'varchar' })
  titulo: string;

  @Column({ name: 'user-id', type: 'varchar' })
  user-id: string;


  @Column({ name: 'imagem', type: 'boolean' })
  imagem: boolean;

  @Column({
    name: 'criado_em',
    type: 'timestamp',
  })
  createdAt: Date;

  @Column({
    name: 'atualizado_em',
    type: 'timestamp',
  })
  updatedAt: Date;
}
