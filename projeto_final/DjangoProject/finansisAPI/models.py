from django.db import models
from django.core.exceptions import ValidationError

def get_other_category():
    category, _ = Category.objects.get_or_create(name='Outros')
    return category

# class ModelBase(models.Model):
#     id = models.BigAutoField(
#         primary_key=True,
#         db_column='id',
#         null=False
#     )
#
#     created_at = models.DateTimeField(
#         auto_now_add=True,
#         db_column='created_at',
#         null=False
#     )
#
#     modified_at = models.DateTimeField(
#         auto_now=True,
#         db_column='modified_at',
#         null=False
#     )
#
#     class Meta:
#         abstract = True
#         managed = True


class Category(models.Model):
    name = models.CharField(max_length=32)

    def __str__(self):
        return self.name

    def delete(self, *args, **kwargs):
        if self.name.lower() == 'outros':
            raise ValidationError('Essa categoria não pode ser deletada!')

        super().delete(*args, **kwargs)


class Entry(models.Model):

    #logica da receita e despesa, bora ver se vai dar bom
    INCOME = 'I'
    EXPENSE = 'E'

    CHOICES =(
        (INCOME, 'Income'),
        (EXPENSE, 'Expense')
    )

    type = models.CharField(
        max_length=1,
        choices=CHOICES,
        default=INCOME,
    )

    description = models.CharField(max_length=100)
    value = models.DecimalField(decimal_places=2, max_digits=64)
    date = models.DateField()

    category = models.ForeignKey(
        Category,
        on_delete=models.SET(get_other_category)
    )

    def __str__(self):
        return f"{self.description} - {self.value}"
