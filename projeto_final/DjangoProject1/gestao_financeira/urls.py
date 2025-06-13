from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'categorias', views.CategoriaViewSet)
router.register(r'transacoes', views.TransacaoViewSet, basename='transacao')
router.register(r'transacoes-categorias', views.TransacaoCategoriaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]