package com.example.test.views

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.test.models.Produto
import com.example.test.services.jsonProdutos
import com.example.test.services.objProdutos
import com.google.gson.Gson


@Composable
fun ListaAPIProdutos (jsonProdutos: String){
    val gson = remember { Gson() }
    val lista = gson.fromJson(jsonProdutos, Array<Produto>::class.java).toList()

    LazyColumn {
        items(lista.size) { i ->
            val item = lista[i]
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 4.dp),
                elevation = CardDefaults.cardElevation(defaultElevation = 4.dp)
            ) {
                Text("${item.nome} - R$ ${item.preco}")
                Text("Em Promoção? ${item.emPromocao}")
            }
        }
    }
}

@Composable
fun ExibirProduto(produtos: List<Produto>) {
    Column(modifier = Modifier.padding(8.dp)) {
        val gson = remember { Gson() }

        produtos.forEach { produto ->
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 4.dp),
                elevation = CardDefaults.cardElevation(defaultElevation = 4.dp)
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text(
                        text = "Produto: ${produto.nome}",
                        style = MaterialTheme.typography.titleMedium
                    )
                    Text(
                        text = "Preço: R$${produto.preco}",
                        style = MaterialTheme.typography.bodyLarge
                    )
                    Spacer(modifier = Modifier.height(8.dp))
                    Text(
                        text = "JSON: ${gson.toJson(produto)}",
                        style = MaterialTheme.typography.bodySmall,
                        fontStyle = FontStyle.Italic
                    )
                }
            }
        }
    }
}


@Preview
@Composable
fun ListaAPIProdutosPreview () {
    ListaAPIProdutos(jsonProdutos)
}

@Preview
@Composable
fun ExibirProdutoPreview () {
    ExibirProduto(objProdutos)
}