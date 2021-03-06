﻿CREATE TABLE instituicao (
	id SERIAL PRIMARY KEY,
	sigla varchar(10),
	nome_instituicao varchar(55) NOT NULL,
	natureza_administrativa varchar(7) NOT NULL CHECK (natureza_administrativa IN ('Pública', 'Privada')),
	nota_IGC smallint NOT NULL CHECK (nota_IGC >= 0 AND nota_IGC <= 5)
);

CREATE TABLE campus(
	id SERIAL PRIMARY KEY,
	nome_campus varchar(55) NOT NULL,
	estado char(2) NOT NULL CHECK (estado IN ('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO')),
	cidade varchar(55) NOT NULL,
	id_instituicao integer,

	FOREIGN KEY(id_instituicao) REFERENCES instituicao(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE curso(
	id SERIAL PRIMARY KEY,
	nome_curso varchar(55) NOT NULL,
	area varchar(30) NOT NULL CHECK (area IN ('Ciências Exatas e da Terra', 'Ciências Biológicas', 'Engenharias', 'Ciências da Saúde', 'Ciências Agrárias', 'Ciências Sociais Aplicadas', 'Ciências Humanas', 'Linguística, Letras e Artes', 'Outros')),
	nota_enade smallint NOT NULL CHECK (nota_enade >= 0 AND nota_enade <= 5),
	grau varchar(12) NOT NULL CHECK (grau IN ('Bacharelado', 'Licenciatura', 'Mestrado', 'Doutorado', 'Tecnólogo')),
	turno varchar(10) NOT NULL CHECK (turno IN ('Matutino', 'Integral', 'Noturno', 'Vespertino')),
	duracao smallint NOT NULL CHECK (duracao > 0 AND duracao <= 12),
	ano_criacao smallint NOT NULL CHECK (ano_criacao <= DATE_PART('YEAR', CURRENT_DATE) AND ano_criacao > 1980),
	id_campus integer,
	
	FOREIGN KEY(id_campus) REFERENCES campus(id) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE curso;
DROP TABLE campus;
DROP TABLE instituicao;