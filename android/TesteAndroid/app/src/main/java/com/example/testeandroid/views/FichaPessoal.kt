package com.example.testeandroid.views

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp

@Composable
fun FichaPessoal(nome: String, idade: Int, hobbies: List<String>) {
    Column(modifier = Modifier.padding(16.dp)) {
        Text("Olá, meu nome é $nome e tenho $idade anos.")
        Spacer(modifier = Modifier.height(8.dp))
        Text("Meus hobbies:")
        hobbies.forEach { hobby ->
            Text("- $hobby")
        }
    }
}

@Preview
@Composable
fun PreviewFicha() {
    FichaPessoal("Maria", 28, listOf("Leitura", "Corrida", "Cinema"))
}
