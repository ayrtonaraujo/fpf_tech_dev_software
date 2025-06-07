package com.example.test.models

class Pessoa(val nome: String, val idade: Int){
    fun apresentar() = "Olá, meu nome é $nome e tenho $idade anos."
    fun podeVotar() = if(idade >= 16) "Pode votar." else "Não pode votar."
    fun faixaEtaria() = when {
        idade >= 60 -> "Idoso(a)."
        idade >= 30 -> "Adulto(a)"
        idade >= 18 -> "Jovem adulto(a)."
        idade >= 12 -> "Jovem."
        else -> "Criança."
    }
}
