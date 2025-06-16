from django.urls import path, include
from rest_framework.routers import DefaultRouter
from finansisAPI.views import CategoryViewSet, EntryViewSet, ResumoMensalView

router = DefaultRouter()
router.register('category', CategoryViewSet)
router.register('entry', EntryViewSet)
# router.register('resumo-mes', ResumoMensalView)

urlpatterns = [
    path('', include(router.urls)),
    path('resumo-mes/', ResumoMensalView.as_view(), name='resumo-mes'),
]