/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.integradoWEB.integradoWEB.repository;

import com.integradoWEB.integradoWEB.models.curso;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author Novaes
 */
public interface cursoRepository extends JpaRepository<curso, String>{
    
    /* DEFINICAO DAS QUERYS*/
    @Query(
    value = "SELECT * FROM curso", 
    nativeQuery = true)
    List<curso> buscarTodos();
    
    @Query(
    value = "select*from curso_por_area(:varArea);",
    nativeQuery = true)
    List<curso> buscarPorArea(@Param("varArea") String area);
    
    @Query(
    value = "select*from busca_nome_natureza(:varnome, :varNatureza);",
    nativeQuery = true)
    List<curso> buscarPorNomeNatureza(@Param("varnome") String nome, @Param("varNatureza") String natureza);
}
