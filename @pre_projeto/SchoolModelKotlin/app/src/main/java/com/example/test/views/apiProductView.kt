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
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import com.example.test.models.Client
import com.example.test.models.Product

@Composable
fun ProductListItem(product: Product, onDelete: (Product) -> Unit) {
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
                    text = product.description,
                    fontWeight = FontWeight.Bold,
                    style = MaterialTheme.typography.bodyLarge
                )
                Row {
                    Text(text = "Qtd: ", fontWeight = FontWeight.Bold)
                    Text("${product.quantity}")
                }
            }
            Button(onClick = { onDelete(product) }) {
                Text("Excluir")
            }
        }
    }
}

@Composable
fun ProductList(products: List<Product>, onDelete: (Product) -> Unit = {}) {
    LazyColumn (
        modifier = Modifier.fillMaxSize(),
        contentPadding = PaddingValues(vertical = 8.dp)
    ) {
        items(products) { product ->
            ProductListItem(product, onDelete)
        }
    }
}

@Composable
fun AddProductForm(onSubmit: (Product) -> Unit) {
    var description by remember { mutableStateOf("") }
    var quantity by remember { mutableStateOf("") }

    Column(modifier = Modifier
        .fillMaxWidth()
        .padding(16.dp)) {

        OutlinedTextField(
            value = description,
            onValueChange = { description = it },
            label = { Text("Descrição do Produto") },
            modifier = Modifier.fillMaxWidth()
        )

        OutlinedTextField(
            value = quantity,
            onValueChange = { quantity = it },
            label = { Text("Quantidade") },
            keyboardOptions = KeyboardOptions.Default.copy(keyboardType = KeyboardType.Number),
            modifier = Modifier.fillMaxWidth()
        )

        Button(
            onClick = {
                if(description.isNotBlank() && quantity.isNotBlank()){
                    val product = Product(
                        id = 0,
                        description = description,
                        quantity = quantity.toIntOrNull() ?: 0,
                    )
                    onSubmit(product)
                    description = ""
                    quantity = ""
                }
            },
            modifier = Modifier.padding(top = 16.dp),
            enabled = description.isNotBlank() && quantity.isNotBlank(),
        ) {
            Text("Salvar")
        }
    }
}