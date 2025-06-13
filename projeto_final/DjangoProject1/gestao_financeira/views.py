from rest_framework import viewsets, permissions
from .models import Categoria, Transacao, TransacaoCategoria
from .serializers import CategoriaSerializer, TransacaoSerializer, TransacaoCategoriaSerializer


class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all().order_by('nome')
    serializer_class = CategoriaSerializer
    permission_classes = [permissions.IsAuthenticated]


class TransacaoViewSet(viewsets.ModelViewSet):
    serializer_class = TransacaoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):

        user = self.request.user
        return Transacao.objects.filter(usuario=user).order_by('-data')

    def perform_create(self, serializer):

        serializer.save(usuario=self.request.user)


class TransacaoCategoriaViewSet(viewsets.ModelViewSet):
    queryset = TransacaoCategoria.objects.all()
    serializer_class = TransacaoCategoriaSerializer
    permission_classes = [permissions.IsAuthenticated]