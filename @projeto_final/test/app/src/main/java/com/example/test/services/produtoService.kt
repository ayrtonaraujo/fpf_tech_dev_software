package com.example.test.services

import com.example.test.models.Produto

val jsonProdutos = """
[
    {"nome": "Caneta", "preco": 2.0, "emPromocao": true},
    {"nome": "Caderno", "preco":10.0, "emPromocao": true},
    {"nome": "Lápis", "preco": 1.5, "emPromocao": true}
]
""".trimIndent()

val objProdutos = listOf (
    Produto("Camiseta", 59.90, true),
    Produto("Tênis", 199.90, false),
    Produto("Boné", 39.90, true)
)