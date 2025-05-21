import django_filters
from catraca_facil.models import Passenger, Bus, Card, Recharge


class PassengerFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='icontains')
    cpf = django_filters.CharFilter(lookup_expr='exact')

    class Meta:
        model = Passenger
        fields = ['name', 'cpf']


class CardFilter(django_filters.FilterSet):
    card_number = django_filters.CharFilter(lookup_expr='exact')
    passenger = django_filters.ModelChoiceFilter(queryset=Passenger.objects.all(),
                                                 lookup_expr='icontains')

    class Meta:
        model = Card
        fields = ['card_number', 'passenger']


class BusFilter(django_filters.FilterSet):
    number = django_filters.CharFilter(lookup_expr='exact')
    company = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Bus
        fields = ['number', 'company']


class RechargeFilter(django_filters.FilterSet):
    payment_method = django_filters.CharFilter(lookup_expr='exact')

    class Meta:
        model = Recharge
        fields = ['payment_method']
