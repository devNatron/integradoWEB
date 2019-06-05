--1a Consulta: Listar sigla da instituição, nome do campus, estado, cidade, nome, grau de especialização, turno e duração em semestres e nota no ENADE de cursos em instituições de uma certa natureza administrativa e que possuam um determinado termo no nome.

--sem join
SELECT curso.sigla, campus, estado, cidade, nome_curso, grau, turno, CONCAT(duracao, ' semestre(s)') AS duracao, nota_enade
	FROM instituicao, campus, curso WHERE instituicao.sigla = campus.sigla AND 
		campus.nome_campus = curso.campus AND campus.sigla = curso.sigla AND 
			nome_curso LIKE '%<termo_fornecido>%' AND natureza_administrativa = '<natureza_fornecida>'
				ORDER BY curso.sigla, estado, cidade;

--com join:
SELECT curso.sigla, estado, cidade, campus, nome_curso, grau, turno, CONCAT(duracao, ' semestre(s)') AS duracao, nota_enade 
	FROM instituicao JOIN campus ON (natureza_administrativa = 'Pública' 
		AND instituicao.sigla = campus.sigla) JOIN curso ON (nome_curso LIKE '%C%' AND 
			campus.nome_campus = curso.campus AND campus.sigla = curso.sigla)
				ORDER BY curso.sigla, estado, cidade;


--2a Consulta: Ranquear campi que criaram mais cursos entre dois determinados anos, fornecendo a sigla, o nome e a natureza administrativa da instituição atrelada a eles, seus nomes, estados, cidades e quantidade de cursos.

--sem join:
SELECT campus.sigla, nome_instituicao, natureza_administrativa, a.nome_campus, estado, cidade, cont
	FROM (SELECT campus.sigla, campus.nome_campus, COUNT(*) AS cont FROM campus, curso 
		WHERE campus.sigla = curso.sigla AND campus.nome_campus = curso.campus 
		AND ano_criacao <= <ano_fornecido1> AND ano_criacao >= <ano_fornecido2>
		GROUP BY campus.sigla, campus.nome_campus) AS a, instituicao, campus
	WHERE instituicao.sigla = campus.sigla AND a.sigla = campus.sigla 
	AND a.nome_campus = campus.nome_campus ORDER BY cont DESC, sigla;


--com join:
SELECT campus.sigla, nome_instituicao, natureza_administrativa, a.nome_campus, estado, cidade, cont
FROM 
     (SELECT campus.sigla, campus.nome_campus, COUNT(*) AS cont 
      FROM campus JOIN curso ON (campus.sigla = curso.sigla AND campus.nome_campus = curso.campus AND ano_criacao <= 2019 AND ano_criacao >= 1980)
      GROUP BY campus.sigla, campus.nome_campus) AS a JOIN
campus ON (a.sigla = campus.sigla AND a.nome_campus = campus.nome_campus) JOIN instituicao ON (instituicao.sigla = campus.sigla)
ORDER BY cont DESC, sigla;
