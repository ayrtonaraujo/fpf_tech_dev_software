from rest_framework import viewsets
from catraca_facil.models import *
from catraca_facil.serializers import *

class PassengerViewSet(viewsets.ModelViewSet):
    queryset = Passenger.objects.all()
    serializer_class = PassengerSerializer

class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

class BusViewSet(viewsets.ModelViewSet):
    queryset = Bus.objects.all()
    serializer_class = BusSerializer

class RechargeViewSet(viewsets.ModelViewSet):
    queryset = Recharge.objects.all()
    serializer_class = RechargeSerializer

class UseCardViewSet(viewsets.ModelViewSet):
    queryset = UseCard.objects.all()
    serializer_class = UseCardSerializer
