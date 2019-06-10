--1a Consulta: Listar sigla da instituição, nome do campus, estado, cidade, nome, grau de especialização, turno e duração em semestres e nota no ENADE de cursos em instituições de uma certa natureza administrativa e que possuam um determinado termo no nome.

SELECT curso.sigla, estado, campus, cidade, nome_curso, grau, turno, duracao, nota_enade 
FROM 
	(SELECT sigla FROM instituicao WHERE natureza_administrativa = <natureza_fornecida>) AS instituicao,
	campus, 
	(SELECT sigla, campus, nome_curso, grau, turno, duracao, nota_enade 
	 FROM curso 
	 WHERE nome_curso LIKE '%<termo_fornecido>%') AS curso 
WHERE instituicao.sigla = campus.sigla AND campus.nome_campus = curso.campus AND campus.sigla = curso.sigla
ORDER BY curso.sigla, estado, cidade;


--2a Consulta: Ranquear campi que criaram mais cursos entre dois determinados anos, fornecendo a sigla, o nome e a natureza administrativa da instituição atrelada a eles, seus nomes, estados, cidades e quantidade de cursos.

SELECT a.sigla, nome_instituicao, natureza_administrativa, a.nome_campus, estado, cidade, cont
FROM 
     (SELECT campus.sigla, campus.nome_campus, estado, cidade, COUNT(*) AS cont 
      FROM campus inner join curso on (campus.sigla = curso.sigla AND campus.nome_campus = curso.campus AND ano_criacao <= <ano_fornecido1> AND ano_criacao >= <ano_fornecido2>)
      GROUP BY campus.sigla, campus.nome_campus) AS a,
instituicao
WHERE instituicao.sigla = a.sigla
ORDER BY cont DESC, sigla;
