from django.db import models


class ModelBase(models.Model):
    id = models.BigAutoField(
        db_column='id',
        null=False,
        primary_key=True
    )
    created_at = models.DateTimeField(
        db_column='dt_created',
        auto_now_add=True,
        null=True
    )
    modified_at = models.DateTimeField(
        db_column='dt_modified',
        auto_now=True,
        null=True
    )
    active = models.BooleanField(
        db_column='cs_active',
        null=False,
        default=True
    )

    class Meta:
        abstract = True
        managed = True


class Client(ModelBase):
    name = models.CharField(
        db_column='tx_nome',
        max_length=70,
        null=False
    )
    age = models.IntegerField(
        db_column='nb_idade',
        null=False
    )
    rg = models.CharField(
        db_column='tx_rg',
        max_length=12,
        null=False
    )
    cpf = models.CharField(
        db_column='tx_cpf',
        max_length=12,
        null=False
    )

    def __str__(self):
        return f"{self.id} - {self.name}"


class Product(ModelBase):
    description = models.TextField(
        db_column='description',
        null=False
    )
    quantity = models.IntegerField(
        db_column='quantity',
        null=False,
        default=0
    )

    def __str__(self):
        return f"{self.description[:30]}... - Qtd: {self.quantity}"


class Employee(ModelBase):
    name = models.CharField(
        db_column='tx_nome',
        max_length=70,
        null=False
    )
    registration = models.CharField(
        db_column='tx_registro',
        max_length=15,
        null=False
    )

    def __str__(self):
        return f"{self.id} - {self.name}"


class Sale(ModelBase):
    product = models.ForeignKey(
        Product,
        db_column='id_product',
        null=False,
        on_delete=models.DO_NOTHING
    )
    client = models.ForeignKey(
        Client,
        db_column='id_client',
        null=False,
        on_delete=models.DO_NOTHING
    )
    employee = models.ForeignKey(
        Employee,
        db_column='id_employee',
        null=False,
        on_delete=models.DO_NOTHING
    )
    nrf = models.CharField(
        db_column='tx_nrf',
        max_length=255,
        null=False
    )

    def __str__(self):
        return (f"Nf:{self.nrf} - Cliente:{self.client.name}, "
                f"Produto:{self.product.description[:30]}..., "
                f"Funcionario:{self.employee.name}")
