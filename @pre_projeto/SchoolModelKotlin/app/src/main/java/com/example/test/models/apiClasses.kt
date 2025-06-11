package com.example.test.models

import kotlinx.datetime.Instant
import kotlinx.serialization.Serializable
import kotlinx.serialization.SerialName

@OptIn(kotlinx.serialization.InternalSerializationApi::class)
@Serializable
data class Client(
    val id: Int,
    val name: String,
    val age: Int,
    val rg: String,
    val cpf: String
)

@OptIn(kotlinx.serialization.InternalSerializationApi::class)
@Serializable
data class Product(
    val id: Int,
    val description: String,
    val quantity: Int
)

@OptIn(kotlinx.serialization.InternalSerializationApi::class)
@Serializable
data class Employee(
    val id: Int,
    val name: String,
    val registration: String,
    val active: Boolean,
    val created_at: Instant? = null,
    val modified_at: Instant? = null
)

@OptIn(kotlinx.serialization.InternalSerializationApi::class)
@Serializable
data class SaleGet(
    val id: Int,
    val product: Product,
    val client: Client,
    val employee: Employee,
    val nrf: String
)

@OptIn(kotlinx.serialization.InternalSerializationApi::class)
@Serializable
data class SalePost(
    @SerialName("product_id")
    val productId: Int,
    @SerialName("client_id")
    val clientId: Int,
    @SerialName("employee_id")
    val employeeId: Int,
    val nrf: String,
)