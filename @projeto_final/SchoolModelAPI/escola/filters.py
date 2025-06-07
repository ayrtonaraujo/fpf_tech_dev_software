import django_filters
from escola.models import Client, Product, Employee, Sale


class ClientFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='icontains')
    cpf = django_filters.CharFilter(lookup_expr='exact')
    rg = django_filters.CharFilter(lookup_expr='exact')

    class Meta:
        model = Client
        fields = ['id', 'name', 'age', 'cpf', 'rg']


class EmployeeFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='icontains')
    registration = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Employee
        fields = ['id', 'name', 'registration']


class ProductFilter(django_filters.FilterSet):
    description = django_filters.CharFilter(field_name='description', lookup_expr='icontains')

    class Meta:
        model = Product
        fields = ['description', 'quantity']


class SaleFilter(django_filters.FilterSet):
    client_id = django_filters.NumberFilter(field_name='client__id')
    client_name = django_filters.CharFilter(field_name='client__name', lookup_expr='icontains')
    employee_id = django_filters.NumberFilter(field_name='employee__id')
    employee_name = django_filters.CharFilter(field_name='employee__name', lookup_expr='icontains')
    product_id = django_filters.NumberFilter(field_name='product__id')
    product_description = django_filters.CharFilter(field_name='product__description', lookup_expr='icontains')

    class Meta:
        model = Sale
        fields = ['id', 'client_id', 'client_name', 'employee_id', 'employee_name', 'product_id', 'product_description']