create table IF NOT EXISTS usuarios(
id int not null PRIMARY KEY SERIAL,
nome varchar (256) NOT NULL,
ativo boolean NOT NULL,
criado_em TIMESTAMP,
atualizado_em TIMESTAMP
);

INSERT INTO usuarios
(
id, nome, ativo, criado_em, atualizado_em
)
VALUES
(
1, 'Gabriela', true, NOW() ::timestamp, NOW() ::timestamp
)