package com.example.test.views

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
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
) {
    val pageCount = 4
    val pagerState = rememberPagerState(
        initialPage = 0,
        pageCount = { pageCount }
    )
    HorizontalPager(
        state = pagerState,
        modifier = Modifier.fillMaxSize()
    ) { page ->
        when (page) {
            0 -> ClientList(clients)
            1 -> ClientList(clients)
            2 -> ClientList(clients)
            3 -> ClientList(clients)
        }
    }
}