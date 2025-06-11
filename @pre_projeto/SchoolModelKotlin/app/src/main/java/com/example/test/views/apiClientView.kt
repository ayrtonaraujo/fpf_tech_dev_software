package com.example.test.views

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Text
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.example.test.models.Client
import androidx.compose.runtime.*
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.input.KeyboardType


@Composable
fun ClientListItem(client: Client, onDelete: (Client) -> Unit) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp, vertical = 4.dp),
        elevation = CardDefaults.cardElevation(4.dp)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column(
                modifier = Modifier
                    .weight(0.75f)
                    .padding(end = 8.dp)
            ) {
                Text(
                    text = client.name,
                    fontWeight = FontWeight.Bold,
                    style = MaterialTheme.typography.bodyLarge
                )
                Text("${client.age} anos")
                Row {
                    Text(text = "CPF: ", fontWeight = FontWeight.Bold,)
                    Text(text = client.cpf)
                }
                Row {
                    Text(text = "RG: ", fontWeight = FontWeight.Bold,)
                    Text(text = client.rg)
                }
            }
            Button(onClick = { onDelete(client) }) {
                Text("Excluir")
            }
        }
    }
}

@Composable
fun ClientList(clients: List<Client>, onDelete: (Client) -> Unit = {}) {
    LazyColumn(
        modifier = Modifier.fillMaxSize(),
        contentPadding = PaddingValues(vertical = 8.dp)
    ) {
        items(clients) { client ->
            ClientListItem(client, onDelete)
        }
    }
}

@Composable
fun AddClientForm(onSubmit: (Client) -> Unit) {
    var name by remember { mutableStateOf("") }
    var age by remember { mutableStateOf("") }
    var rg by remember { mutableStateOf("") }
    var cpf by remember { mutableStateOf("") }

    val charLimit = 12
    val cpfRemaining = charLimit - cpf.length
    val isCpfValid = cpf.length <= charLimit
    val rgRemaining = charLimit - rg.length
    val isRgValid = rg.length <= charLimit
    val isAgeValid = age.toIntOrNull()?.let { it in 18..100 } == true

    Column(modifier = Modifier
        .fillMaxWidth()
        .padding(16.dp)) {

        OutlinedTextField(
            value = name,
            onValueChange = { name = it },
            label = { Text("Nome") },
            modifier = Modifier.fillMaxWidth()
        )

        OutlinedTextField(
            value = age,
            onValueChange = { age = it },
            label = { Text("Idade") },
            keyboardOptions = KeyboardOptions.Default.copy(keyboardType = KeyboardType.Number),
            supportingText = {Text("Deve ser entre 18 e 100")},
            modifier = Modifier.fillMaxWidth()
        )

        OutlinedTextField(
            value = cpf,
            onValueChange = { cpf = it.take(charLimit) },
            label = { Text("CPF") },
            isError = !isCpfValid,
            supportingText = {
                Text(
                    text = if (isCpfValid)
                        "Caracteres restantes: $cpfRemaining"
                    else
                        "CPF excede o limite de 12 caracteres",
                    color = if (isCpfValid) Color.Gray else Color.Red
                )
            },
            modifier = Modifier.fillMaxWidth()
        )

        OutlinedTextField(
            value = rg,
            onValueChange = { rg = it.take(charLimit) },
            label = { Text("RG") },
            isError = !isRgValid,
            supportingText = {
                Text(
                    text = if (isRgValid)
                        "Caracteres restantes: $rgRemaining"
                    else
                        "RG excede o limite de 12 caracteres",
                    color = if (isRgValid) Color.Gray else Color.Red
                )
            },
            modifier = Modifier.fillMaxWidth()
        )

        Button(
            onClick = {
                if(name.isNotBlank() && isAgeValid && isCpfValid && isRgValid){
                    val client = Client(
                        id = 0,
                        name = name,
                        age = age.toIntOrNull() ?: 0,
                        cpf = cpf,
                        rg = rg
                    )
                    onSubmit(client)
                    name = ""
                    age = ""
                    cpf = ""
                    rg = ""
                }
            },
            modifier = Modifier.padding(top = 16.dp),
            enabled = name.isNotBlank() && isAgeValid && isCpfValid && rg.isNotBlank(),
        ) {
            Text("Salvar")
        }
    }
}