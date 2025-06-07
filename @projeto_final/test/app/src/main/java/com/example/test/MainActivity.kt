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
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
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

    LaunchedEffect(Unit) {
        clients = ApiService.getClients()
        products = ApiService.getProducts()
        employees = ApiService.getEmployees()
        sales = ApiService.getSales()
    }
    SwipePagerScreen(clients, products, employees, sales)
}


