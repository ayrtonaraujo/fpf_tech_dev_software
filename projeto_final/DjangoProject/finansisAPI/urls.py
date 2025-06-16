from django.urls import path, include
from rest_framework.routers import DefaultRouter
from finansisAPI.views import CategoryViewSet, EntryViewSet

router = DefaultRouter()
router.register('category', CategoryViewSet)
router.register('entry', EntryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]