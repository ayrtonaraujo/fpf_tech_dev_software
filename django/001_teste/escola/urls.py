from django.urls import path, include
from rest_framework.routers import DefaultRouter
from escola.views import ClientViewSet, ProductViewSet, EmployeeViewSet, SaleViewSet

router = DefaultRouter()
router.register(r'clients', ClientViewSet)
router.register(r'products', ProductViewSet)
router.register(r'employees', EmployeeViewSet)
router.register(r'sales', SaleViewSet)

urlpatterns = [
    path('', include(router.urls)),
]