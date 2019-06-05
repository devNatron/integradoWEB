--1a Consulta: 
SELECT instituicao.sigla, nome_campus, estado, cidade, nome_curso, grau, turno, CONCAT(duracao, ' semestre(s)') AS duracao, nota_enade
	FROM instituicao, campus, curso WHERE instituicao.id = campus.instituicao_id AND 
		campus.id = curso.id_campus  AND nome_curso LIKE '%<termo_fornecido>%' 
            AND natureza_administrativa = '<natureza_fornecida>' ORDER BY curso.sigla, estado, cidade;



--2a Consulta:
SELECT sigla, nome_instituicao, natureza_administrativa, a.nome_campus, estado, cidade, cont
	FROM (SELECT campus.id, nome_campus, estado, cidade, id_instituicao, COUNT(*) AS cont FROM campus, curso 
		WHERE campus.id = curso.id_campus AND ano_criacao <= 2019 AND ano_criacao >= 2000
		GROUP BY campus.id) AS a, instituicao
	WHERE instituicao.id = a.id_instituicao 
	ORDER BY cont DESC, sigla;