programa
{
	inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{
		inteiro numTotalPessoas, i
		real contaTotal = 0
		real gastoPessoal, calculo

		escreva("Quantos clientes?\n")
		leia(numTotalPessoas)

		para (i = 0; i < numTotalPessoas; i ++) {
			escreva ("Quanto o ", i+1, "º cliente gastou?\n")
			leia(gastoPessoal)
			contaTotal += gastoPessoal
		}

		calculo = contaTotal / numTotalPessoas

		para (i = 0; i < numTotalPessoas; i++) {
			escreva ("Cliente nº", i + 1, " deve pagar: R$ ", mat.arredondar(calculo, 2), "\n")
		}		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 156; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */