package com.example.test

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.example.test.ui.theme.TestTheme
import androidx.compose.runtime.*
import androidx.compose.ui.window.Dialog
import com.example.test.models.*
import com.example.test.services.ApiService
import com.example.test.views.*
import kotlinx.coroutines.launch

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            TestTheme {
                Scaffold(
                    modifier = Modifier
                        .fillMaxSize()
                        .padding(vertical = 32.dp)
                ) { innerPadding ->
                    Greeting(
                        name = "Android",
                        modifier = Modifier.padding(innerPadding)
                    )
                }

            }
        }
    }
}

@Composable
fun Greeting(name: String, modifier: Modifier = Modifier) {
    var clients by remember { mutableStateOf<List<Client>>(emptyList()) }
    var products by remember { mutableStateOf<List<Product>>(emptyList()) }
    var employees by remember { mutableStateOf<List<Employee>>(emptyList()) }
    var sales by remember { mutableStateOf<List<SaleGet>>(emptyList()) }

    var currentFormPage by remember { mutableStateOf<Int?>(null) }

    val coroutineScope = rememberCoroutineScope()

    LaunchedEffect(Unit) {
        clients = ApiService.getClients()
        products = ApiService.getProducts()
        employees = ApiService.getEmployees()
        sales = ApiService.getSales()
    }

    SwipePagerScreen(
        clients = clients,
        products = products,
        employees = employees,
        sales = sales,
        onFabClick = { page -> currentFormPage = page },
        onDeleteClient = { client ->
            println("On delete client")
            coroutineScope.launch {
                ApiService.deleteClient(client.id)
                clients = ApiService.getClients()
            }
        },
        onDeleteProduct = { product ->
            coroutineScope.launch {
                ApiService.deleteProduct(product.id)
                products = ApiService.getProducts()
            }
        },
        onDeleteEmployee = { employee ->
            coroutineScope.launch {
                ApiService.deleteEmployee(employee.id)
                employees = ApiService.getEmployees()
            }
        },
        onDeleteSale = { sale ->
            coroutineScope.launch {
                ApiService.deleteSale(sale.id)
                sales = ApiService.getSales()
            }
        }
    )

    currentFormPage?.let { page ->
        Dialog(onDismissRequest = { currentFormPage = null }) {
            Surface(
                shape = RoundedCornerShape(16.dp),
                tonalElevation = 8.dp,
                modifier = Modifier.padding(16.dp)
            ) {
                when (page) {
                    0 -> AddClientForm { newClient ->
                        coroutineScope.launch {
                            ApiService.postClient(newClient)
                            clients = ApiService.getClients()
                            currentFormPage = null
                        }
                    }
                    //vamos ter que deletar esse numero 1 depois
//                    1 -> AddClientForm { newClient ->
//                        coroutineScope.launch {
//                            ApiService.postClient(newClient)
//                            clients = ApiService.getClients()
//                            currentFormPage = null
//                        }
//                    }

                    1 -> AddProductForm { newProduct ->
                        coroutineScope.launch {
                            ApiService.postProduct(newProduct)
                            products = ApiService.getProducts()
                            currentFormPage = null
                        }
                    }

                    2 -> AddEmployeeForm { newEmployee ->
                        coroutineScope.launch {
                            ApiService.postEmployee(newEmployee)
                            employees = ApiService.getEmployees()
                            currentFormPage = null
                        }
                    }

                    3 -> AddSaleForm(
                        products = products,
                        clients = clients,
                        employees = employees
                    ) { newSale ->
                        coroutineScope.launch {
                            ApiService.postSale(newSale)
                            sales = ApiService.getSales()
                            currentFormPage = null
                        }
                    }
                }
            }
        }
    }
}