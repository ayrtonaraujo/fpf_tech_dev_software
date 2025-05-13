from cffi import model
from django.db import models


class ModelBase(models.Model):
    id = models.BigAutoField(
        db_column = 'id',
        null = False,
        primary_key = True
    )
    created_at = models.DateTimeField(
        db_column = 'created_at',
        auto_now_add=True,
        null = True
    )
    updated_at = models.DateTimeField(
        db_column = 'updated_at',
        auto_now=True,
        null = True
    )
    active = models.BooleanField(
        db_column = 'active',
        null = False,
        default=True
    )
    class Meta:
        abstract = True
        managed = True


class Client(ModelBase):
    name = models.CharField(
        db_column = 'name',
        max_length = 70,
        null = False,
    )
    age = models.IntegerField(
        db_column = 'age',
        null = False
    )
    rg = models.CharField(
        db_column = 'rg',
        max_length = 12,
        null = False
    )
    cpf = models.CharField(
        db_column = 'cpf',
        max_length = 12,
        null = False
    )


class Product(ModelBase):
    description = models.TextField(
        db_column = 'description',
        null = False
    )
    quantity = models.IntegerField(
        db_column = 'quantity',
        null = False,
        default = 0
    )


class Employee(ModelBase):
    name = models.CharField(
        db_column = 'name',
        max_length = 70,
        null = False
    )
    registraction = models.CharField(
        db_column = 'registration',
        null = False,
        max_length = 15
    )

class Sale (ModelBase):
    number_nf = models.CharField(
        max_length = 255,
        null = False,
    )
    client = model.ForeignKey(
        Client,
        db_column = 'id_client',
        null = False,
        on_delete = models.DO_NOTHING
    )
    product = model.ForeignKey(
        Product,
        db_column = 'id_product',
        null = False,
        on_delete = models.DO_NOTHING
    )
    employee = models.ForeignKey(
        Employee,
        db_column = 'id_employee',
        null = False,
        on_delete = models.DO_NOTHING
    )
