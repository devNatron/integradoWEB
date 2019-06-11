/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.integradoWEB.integradoWEB.controller;

import com.integradoWEB.integradoWEB.models.instituicao;
import com.integradoWEB.integradoWEB.repository.instituicaoRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Novaes
 */
@RestController
@RequestMapping(value="/api")
public class instituicaoControler {
    @Autowired
    instituicaoRepository instituicaoRepo;

//    @ApiOperation(value="Retorna uma lista de Produtos")
    @GetMapping(path = "/instituicoes", produces="application/json;charset=UTF-8")
    public List<instituicao> listaInstituicoes(){
            return instituicaoRepo.;
    }

//    @ApiOperation(value="Retorna um produto unico")
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/instituicoes/{sigla}", produces="application/json;charset=UTF-8")
    public Optional<instituicao> listainstituicaoUnico(@PathVariable(value="sigla") String sigla){
            return instituicaoRepo.findById(sigla);
    }
    
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/inst", produces="application/json;charset=UTF-8")
    public List<instituicao> listaInst(){
            return instituicaoRepo.findAllActiveUsers();
    }
//
//    @ApiOperation(value="Salva um produto")
//    @PostMapping("/produto")
//    public Produto salvaProduto(@RequestBody @Valid Produto produto) {
//            return produtoRepository.save(produto);
//    }
//
//    @ApiOperation(value="Deleta um produto")
//    @DeleteMapping("/produto")
//    public void deletaProduto(@RequestBody @Valid Produto produto) {
//            produtoRepository.delete(produto);
//    }
//
//    @ApiOperation(value="Atualiza um produto")
//    @PutMapping("/produto")
//    public Produto atualizaProduto(@RequestBody @Valid Produto produto) {
//            return produtoRepository.save(produto);
//    }
}
