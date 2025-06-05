package com.example.test.views

import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.example.test.models.Pessoa

@Composable
fun PessoaCard(pessoa: Pessoa) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp)
            .border(1.dp, Color.Gray, RoundedCornerShape(8.dp))
            .padding(16.dp)
    ) {
        Text(pessoa.apresentar(), fontWeight = FontWeight.Bold)
        Spacer(modifier = Modifier.height(4.dp))
        Text(pessoa.podeVotar())
        Text(pessoa.faixaEtaria())
    }
}
//
//@Preview
//@Composable
//fun PreviewPessoaCard() {
//    PessoaCard(Pessoa("João", 17))
//}s