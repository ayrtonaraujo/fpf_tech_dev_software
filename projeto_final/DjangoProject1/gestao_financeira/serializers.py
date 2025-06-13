from rest_framework import serializers
from .models import Categoria, Transacao, TransacaoCategoria
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name']

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'

class TransacaoSerializer(serializers.ModelSerializer):
    usuario = serializers.ReadOnlyField(source='usuario.username')

    class Meta:
        model = Transacao
        fields = ['id_transacao', 'usuario', 'tipo', 'valor', 'data', 'descricao']

class TransacaoCategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TransacaoCategoria
        fields = '__all__'