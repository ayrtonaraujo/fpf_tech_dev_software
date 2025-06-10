package com.example.test.views

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material3.FloatingActionButton
import androidx.compose.material3.Icon
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.example.test.models.Client
import com.example.test.models.Employee
import com.example.test.models.Product
import com.example.test.models.SaleGet

@Composable
fun SwipePagerScreen(
    clients: List<Client>,
    products: List<Product>,
    employees: List<Employee>,
    sales: List<SaleGet>,
    onFabClick: (Int) -> Unit,
    onDeleteClient: (Client) -> Unit,
    onDeleteProduct: (Product) -> Unit,
    onDeleteEmployee: (Employee) -> Unit,
    onDeleteSale: (SaleGet) -> Unit
) {
    val pageCount = 4 //quantidade de páginas que aparecerão
    val pagerState = rememberPagerState(
        initialPage = 0,
        pageCount = { pageCount }
    )
    Box(modifier = Modifier.fillMaxSize()) {
        HorizontalPager(
            state = pagerState,
            modifier = Modifier.fillMaxSize()
        ) { page ->
            when (page) {
                0 -> ClientList(clients, onDelete = onDeleteClient)
                //vamos ter que deletar esse numero 1 depois
//                1 -> ClientList(clients, onDelete = onDeleteClient)
                1 -> ProductList(products, onDelete = onDeleteProduct)
                2 -> EmployeeList(employees, onDelete = onDeleteEmployee)
                3 -> SaleList(sales, onDelete = onDeleteSale)
            }
        }
        FloatingActionButton(
            onClick = { onFabClick(pagerState.currentPage) },
            modifier = Modifier
                .align(Alignment.BottomEnd)
                .padding(16.dp)
        ) {
            Icon(Icons.Default.Add, contentDescription = "Adicionar")
        }
    }
}