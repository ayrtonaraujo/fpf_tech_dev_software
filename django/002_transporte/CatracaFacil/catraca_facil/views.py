from rest_framework import viewsets, permissions
from catraca_facil.serializers import *
from catraca_facil.filters import *
from django_filters.rest_framework import DjangoFilterBackend

class PassengerViewSet(viewsets.ModelViewSet):
    queryset = Passenger.objects.all()
    serializer_class = PassengerSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_class = PassengerFilter


class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_class = CardFilter

class BusViewSet(viewsets.ModelViewSet):
    queryset = Bus.objects.all()
    serializer_class = BusSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_class = BusFilter

class RechargeViewSet(viewsets.ModelViewSet):
    queryset = Recharge.objects.all()
    serializer_class = RechargeSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_class = Recharge

class UseCardViewSet(viewsets.ModelViewSet):
    queryset = UseCard.objects.all()
    serializer_class = UseCardSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_class = UseCard