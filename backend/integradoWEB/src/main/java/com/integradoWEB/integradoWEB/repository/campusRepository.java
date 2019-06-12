/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.integradoWEB.integradoWEB.repository;

import com.integradoWEB.integradoWEB.models.campus;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author Novaes
 */
public interface campusRepository extends JpaRepository<campus, String>{
    
    /* DEFINICAO DAS QUERYS*/
    @Query(
    value = "select*from ranqueamento_campi(:ano_inicial, :ano_final);", 
    nativeQuery = true)
    List<campus> ranquearCampi(@Param("ano_inicial") int ano1, @Param("ano_final") int ano2);
    
}
