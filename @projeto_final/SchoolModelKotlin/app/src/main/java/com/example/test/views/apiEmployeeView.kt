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
import com.example.test.models.Employee

@Composable
fun EmployeeListItem(employee: Employee, onDelete: (Employee) -> Unit) {
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
                    text = employee.name,
                    fontWeight = FontWeight.Bold,
                    style = MaterialTheme.typography.bodyLarge
                )
                Row {
                    Text(text = "Registro: ", fontWeight = FontWeight.Bold)
                    Text("${employee.registration}")
                }
            }
            Button(onClick = { onDelete(employee) }) {
                Text("Excluir")
            }
        }
    }
}

@Composable
fun EmployeeList(employees: List<Employee>, onDelete: (Employee) -> Unit = {}) {
    LazyColumn (
        modifier = Modifier.fillMaxSize(),
        contentPadding = PaddingValues(vertical = 8.dp)
    ) {
        items(employees) { emp ->
            EmployeeListItem(emp, onDelete)
        }
    }
}

@Composable
fun AddEmployeeForm(onSubmit: (Employee) -> Unit) {
    var name by remember { mutableStateOf("") }
    var registration by remember { mutableStateOf("") }

    val regLimit = 15
    val isRegistrationValid = registration.length <= regLimit

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp)
    ) {
        OutlinedTextField(
            value = name,
            onValueChange = { name = it },
            label = { Text("Nome") },
            modifier = Modifier.fillMaxWidth()
        )

        OutlinedTextField(
            value = registration,
            onValueChange = { registration = it.take(regLimit) },
            label = { Text("Registro") },
            isError = !isRegistrationValid,
            supportingText = {
                Text(
                    text = if (isRegistrationValid)
                        "Caracteres restantes: ${regLimit - registration.length}"
                    else
                        "Registro excede o limite de 15 caracteres",
                    color = if (isRegistrationValid) Color.Gray else Color.Red
                )
            },
            modifier = Modifier.fillMaxWidth()
        )

        Button(
            onClick = {
                if (name.isNotBlank() && isRegistrationValid) {
                    val employee = Employee(
                        id = 0,
                        name = name,
                        registration = registration,
                        active = true
                    )
                    onSubmit(employee)
                    name = ""
                    registration = ""
                }
            },
            modifier = Modifier.padding(top = 16.dp),
            enabled = name.isNotBlank() && isRegistrationValid
        ) {
            Text("Salvar")
        }
    }
}