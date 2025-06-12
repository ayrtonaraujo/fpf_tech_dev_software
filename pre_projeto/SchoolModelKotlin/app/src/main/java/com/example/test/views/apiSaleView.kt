package com.example.test.views

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowDropDown
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.runtime.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.example.test.models.Client
import com.example.test.models.Employee
import com.example.test.models.Product
import com.example.test.models.SaleGet
import com.example.test.models.SalePost

@Composable
fun SaleListItem(sale: SaleGet, onDelete: (SaleGet) -> Unit) {
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
                    text = sale.product.description,
                    fontWeight = FontWeight.Bold,
                    style = MaterialTheme.typography.bodyLarge
                )
                Row {
                    Text(text = "Cliente: ", fontWeight = FontWeight.Bold)
                    Text("${sale.client.name}")
                }
                Row {
                    Text(text = "Vendedor: ", fontWeight = FontWeight.Bold)
                    Text("${sale.employee.name}")
                }
            }
            Button(onClick = { onDelete(sale) }) {
                Text("Excluir")
            }
        }
    }
}

@Composable
fun SaleList(sales: List<SaleGet>, onDelete: (SaleGet) -> Unit = {}) {
    LazyColumn(
        modifier = Modifier.fillMaxSize(),
        contentPadding = PaddingValues(vertical = 8.dp)
    ) {
        items(sales) { sale ->
            SaleListItem(sale, onDelete)
        }
    }
}

@Composable
fun <T> DropdownSelector(
    label: String,
    items: List<T>,
    selectedItem: T?,
    onItemSelected: (T) -> Unit,
    itemLabel: (T) -> String
) {
    var expanded by remember { mutableStateOf(false) }

    Box {
        OutlinedTextField(
            value = selectedItem?.let { itemLabel(it) } ?: "",
            onValueChange = {},
            readOnly = true,
            label = { Text(label) },
            modifier = Modifier.fillMaxWidth(),
            trailingIcon = {
                IconButton(onClick = { expanded = !expanded }) {
                    Icon(Icons.Default.ArrowDropDown, contentDescription = "Expand")
                }
            }
        )

        DropdownMenu(
            expanded = expanded,
            onDismissRequest = { expanded = false }
        ) {
            items.forEach { item ->
                DropdownMenuItem(
                    text = { Text(itemLabel(item)) },
                    onClick = {
                        onItemSelected(item)
                        expanded = false
                    }
                )
            }
        }
    }
}

@Composable
fun LoadingDropdown(label: String) {
    Column(modifier = Modifier.fillMaxWidth()) {
        Text(label, modifier = Modifier.padding(bottom = 8.dp))
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .height(56.dp),
            contentAlignment = Alignment.Center
        ) {
            CircularProgressIndicator(strokeWidth = 2.dp)
        }
    }
}

@Composable
fun AddSaleForm(
    products: List<Product>?,
    clients: List<Client>?,
    employees: List<Employee>?,
    onSubmit: (SalePost) -> Unit
) {
    var selectedProduct by remember { mutableStateOf<Product?>(null) }
    var selectedClient by remember { mutableStateOf<Client?>(null) }
    var selectedEmployee by remember { mutableStateOf<Employee?>(null) }
    var nrf by remember { mutableStateOf("") }

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp)
    ) {

        if (products == null) {
            LoadingDropdown(label = "Produto")
        } else {
            DropdownSelector(
                label = "Produto",
                items = products,
                selectedItem = selectedProduct,
                onItemSelected = { selectedProduct = it }
            ) { it.description }
        }
        Spacer(modifier = Modifier.height(16.dp))
        if (clients == null) {
            LoadingDropdown(label = "Cliente")
        } else {
            DropdownSelector(
                label = "Cliente",
                items = clients,
                selectedItem = selectedClient,
                onItemSelected = { selectedClient = it }
            ) { it.name }
        }
        Spacer(modifier = Modifier.height(16.dp))
        if (employees == null) {
            LoadingDropdown(label = "Funcionário")
        } else {
            DropdownSelector(
                label = "Funcionário",
                items = employees,
                selectedItem = selectedEmployee,
                onItemSelected = { selectedEmployee = it }
            ) { it.name }
        }
        Spacer(modifier = Modifier.height(24.dp))
        OutlinedTextField(
            value = nrf,
            onValueChange = { nrf = it },
            label = { Text("Número da nota (NRF)") },
            modifier = Modifier.fillMaxWidth()
        )
        Button(
            onClick = {
                if (selectedProduct != null && selectedClient != null && selectedEmployee != null && nrf.isNotBlank()) {
                    onSubmit(
                        SalePost(
                            productId = selectedProduct!!.id,
                            clientId = selectedClient!!.id,
                            employeeId = selectedEmployee!!.id,
                            nrf = nrf
                        )
                    )
                }
            },
            enabled = selectedProduct != null && selectedClient != null && selectedEmployee != null && nrf.isNotBlank()
        ) {
            Text("Salvar")
        }
    }
}