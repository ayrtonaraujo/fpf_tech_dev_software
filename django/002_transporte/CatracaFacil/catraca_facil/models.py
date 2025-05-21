from django.db import models

class ModelBase(models.Model):
    id = models.BigAutoField(
        db_column = 'id',
        null = False,
        primary_key = True
    )

    created_at = models.DateTimeField(
        auto_now_add = True,
        db_column = 'created_at',
        null = True
    )

    modified_at = models.DateTimeField(
        db_column = 'modified_at',
        null = True,
        auto_now=True
    )

    active = models.BooleanField(
        db_column = 'active',
        null = False,
        default = True
    )

    class Meta:
        abstract = True
        managed = True


class Passenger(ModelBase):
    name = models.CharField(
        db_column = 'name',
        max_length = 100,
        null = False
    )

    age = models.IntegerField(
        db_column = 'age',
        null = False,
        default = 6
    )

    cpf = models.CharField(
        db_column = 'cpf',
        max_length = 11,
        null = False
    )

    balance = models.BigIntegerField(
        db_column = 'balance',
        default = 0
    )

    def __str__(self):
        return f"{self.id} - {self.name} - {self.cpf}"


class Card (ModelBase):
    card_number = models.CharField(
        db_column = 'card_number',
        max_length = 10,
        null = False
    )

    date_issue= models.DateField(
        db_column = 'date_issue',
        null = False,
    )

    date_expiration = models.DateField(
        db_column = 'date_expiration',
        null = False
    )

    passenger = models.ForeignKey(
        Passenger,
        db_column = 'passenger',
        null = False,
        on_delete = models.DO_NOTHING
    )

    def __str__(self):
        return f"{self.id} - {self.card_number}"


class Bus(ModelBase):
    number = models.CharField(
        db_column = 'number',
        max_length = 10,
        null = False
    )

    company = models.CharField(
        db_column = 'company',
        max_length = 30,
        null = False
    )

    def __str__(self):
        return f"{self.id} - {self.number}"


class Recharge(ModelBase):
    payment_type = [('dinheiro', 'Dinheiro'),
                    ('cartão', 'Cartão'),
                    ('pix', 'Pix'),
    ]


    value = models.BigIntegerField(
        db_column = 'value',
        null = False
    )

    date_recharge = models.DateTimeField(
        db_column = 'date_recharge',
        null = False,
        auto_now = True
    )

    payment_method = models.CharField(
        db_column = 'payment_method',
        choices = payment_type,
        null = False,
        max_length = 10,
        default = 'Pix'
    )

    card = models.ForeignKey(
        Card,
        db_column = 'card',
        null = False,
        on_delete = models.DO_NOTHING
    )

    def __str__(self):
        return f"{self.id} - {self.card} - {self.date_recharge}"


class UseCard (ModelBase):
    used_value = models.BigIntegerField(
        db_column = 'used_value',
        null = False
    )

    date_used = models.DateTimeField(
        db_column = 'date_used',
        null = False,
        auto_now = True
    )

    onboard_local = models.CharField(
        db_column = 'onboard_local',
        max_length= 100,
        null = False
    )

    card = models.ForeignKey(
        Card,
        db_column = 'card',
        null = False,
        on_delete = models.DO_NOTHING
    )

    bus = models.ForeignKey(
        Bus,
        db_column = 'bus',
        null = False,
        on_delete = models.DO_NOTHING
    )

    def __str__(self):
        return f"{self.id} - {self.card} - {self.date_used}"