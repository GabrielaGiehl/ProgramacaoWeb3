import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('favoritos-filmes')
export default class moviesEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'titulo', type: 'varchar' })
  titulo: string;

  @Column({ name: 'user_id', type: 'varchar' })
  


  @Column({ name: 'imagem', type: 'boolean' })
  
  @Column({
    name: 'criado_em',
    type: 'timestamp',
  })
  

  @Column({
    name: 'atualizado_em',
    type: 'timestamp',
  })
  

}

