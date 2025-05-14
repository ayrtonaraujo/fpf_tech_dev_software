from rest_framework import serializers
from escola.models import Client, Product, Employee, Sale

class ClientSerializer(serializers.ModelSerializer):
    age = serializers.IntegerField(min_value=18, max_value=100)

    class Meta:
        model = Client
        fields = ['id', 'name', 'age', 'rg', 'cpf']


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'description', 'quantity']


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'


class SaleSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    product_id = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all(), source='product', write_only=True)
    client = ClientSerializer(read_only=True)
    client_id = serializers.PrimaryKeyRelatedField(queryset=Client.objects.all(), source='client', write_only=True)
    employee = EmployeeSerializer(read_only=True)
    employee_id = serializers.PrimaryKeyRelatedField(queryset=Employee.objects.all(), source='employee', write_only=True)

    class Meta:
        model = Sale
        fields = ['id', 'product_id', 'product', 'client_id', 'client', 'employee_id', 'employee', 'nrf']