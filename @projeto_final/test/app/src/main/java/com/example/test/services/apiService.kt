package com.example.test.services

import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.request.*
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.http.ContentType
import io.ktor.http.contentType
import com.example.test.models.Client
import com.example.test.models.Employee
import com.example.test.models.Product
import com.example.test.models.SaleGet
import com.example.test.models.SalePost
import io.ktor.client.engine.android.Android
import io.ktor.client.plugins.logging.LogLevel
import io.ktor.client.plugins.logging.Logging
import io.ktor.serialization.kotlinx.json.json
import kotlinx.serialization.json.Json

object ApiService {
    val http = HttpClient(Android) {
        install(Logging) {
            level = LogLevel.ALL
        }
        install(ContentNegotiation) {
            json(Json {
                ignoreUnknownKeys = true
                prettyPrint = true
                isLenient = true
            })
        }
    }

    suspend fun getClients(): List<Client> {
        return this.http.get("http://10.0.2.2:8000/clients/").body<List<Client>>()
    }
    suspend fun getProducts(): List<Product> {
        return this.http.get("http://10.0.2.2:8000/products/").body<List<Product>>()
    }
    suspend fun getEmployees(): List<Employee> {
        return this.http.get("http://10.0.2.2:8000/employees/").body<List<Employee>>()
    }
    suspend fun getSales(): List<SaleGet> {
        return this.http.get("http://10.0.2.2:8000/sales/").body<List<SaleGet>>()
    }
}