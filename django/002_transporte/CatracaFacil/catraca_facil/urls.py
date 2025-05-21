from django.urls import path, include
from rest_framework.routers import DefaultRouter
from catraca_facil.views import PassengerViewSet, UseCardViewSet, BusViewSet, RechargeViewSet, CardViewSet

router = DefaultRouter()

router.register(r'passenger', PassengerViewSet)
router.register(r'bus', BusViewSet)
router.register(r'card', CardViewSet)
router.register(r'use_card', UseCardViewSet)
router.register(r'recharge', RechargeViewSet)


urlpatterns = [
    path('', include(router.urls)),
]