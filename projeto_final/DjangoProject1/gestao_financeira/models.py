from django.db import models
from django.contrib.auth.models import User


class Categoria(models.Model):
    id_categoria = models.AutoField(
        primary_key=True
    )
    nome = models.CharField(
        max_length=100
    )

    def __str__(self):
        return self.nome


class Transacao(models.Model):
    id_transacao = models.AutoField(
        primary_key=True
    )
    usuario = models.ForeignKey(
        User, on_delete=models.CASCADE
    )
    tipo = models.CharField(
        max_length=1
    )
    valor = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )
    data = models.DateField()
    descricao = models.CharField(
        max_length=255
    )

    def __str__(self):
        return f"{self.descricao} - R$ {self.valor}"


class TransacaoCategoria(models.Model):
    id_transacaocategoria = models.AutoField(
        primary_key=True
    )
    transacao = models.ForeignKey(
        Transacao,
        on_delete=models.CASCADE
    )
    categoria = models.ForeignKey(
        Categoria,
        on_delete=models.CASCADE
    )


    def __str__(self):
        return f"{self.transacao.descricao} -> {self.categoria.nome}"