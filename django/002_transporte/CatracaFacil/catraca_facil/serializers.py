from rest_framework import serializers
from catraca_facil.models import Passenger, Bus, Recharge, Card, UseCard


class PassengerSerializer(serializers.ModelSerializer):
    age = serializers.IntegerField (min_value= 6,
                                    max_value= 65
    )

    class Meta:
        model = Passenger
        fields = '__all__'


class CardSerializer(serializers.ModelSerializer):

    passenger = PassengerSerializer(read_only=True)
    passenger_id = serializers.PrimaryKeyRelatedField(queryset=Passenger.objects.all(),
                                            source='passenger',
                                            write_only=True
    )

    class Meta:
        model = Card
        fields = '__all__'


class BusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bus
        fields = '__all__'


class RechargeSerializer(serializers.ModelSerializer):
    card = CardSerializer(read_only=True)
    card_id = serializers.PrimaryKeyRelatedField(queryset=Card.objects.all(),
                                                source='card',
                                                write_only=True)

    class Meta:
        model = Recharge
        fields = '__all__'


class UseCardSerializer(serializers.ModelSerializer):
    card = CardSerializer(read_only=True)
    card_id = serializers.PrimaryKeyRelatedField(queryset=Card.objects.all(),
                                                 source='card',
                                                 write_only=True
    )
    bus = BusSerializer(read_only=True)
    bus_id = serializers.PrimaryKeyRelatedField(queryset=Bus.objects.all(),
                                                source='bus',
                                                write_only=True
    )

    class Meta:
        model = Card
        fields = '__all__'