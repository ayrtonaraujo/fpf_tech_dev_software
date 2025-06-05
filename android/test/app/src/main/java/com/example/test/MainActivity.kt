package com.example.test

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.example.test.models.Pessoa
import com.example.test.ui.theme.TestTheme
import com.example.test.views.FichaPessoal
import com.example.test.views.ListaDeProdutos
import com.example.test.views.PessoaCard
import com.example.test.models.Produto

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
//    PessoaCard(Pessoa("Ayrton", 30))
   val produtos = listOf(
        Produto("Arroz", 8.0, true),
        Produto("Feijão", 7.5, true),
        Produto("Macarrão", 4.0, false),
        Produto("Açúcar", 3.8, true),
        Produto("Óleo de soja", 9.5, false),
        Produto("Farinha de trigo", 5.2, true),
        Produto("Leite", 6.0, true),
        Produto("Café", 12.0, false),
        Produto("Manteiga", 14.5, true),
        Produto("Queijo", 18.0, true),
        Produto("Presunto", 16.7, true)
   )

    ListaDeProdutos(produtos)
}

//@Preview(showBackground = true)
//@Composable
//fun GreetingPreview() {
//    TestTheme {
//        Greeting("Android")
//    }
//}

