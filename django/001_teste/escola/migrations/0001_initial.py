# Generated by Django 5.2.1 on 2025-05-13 23:34

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.BigAutoField(db_column='id', primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True, db_column='dt_created', null=True)),
                ('modified_at', models.DateTimeField(auto_now=True, db_column='dt_modified', null=True)),
                ('active', models.BooleanField(db_column='cs_active', default=True)),
                ('name', models.CharField(db_column='tx_nome', max_length=70)),
                ('age', models.IntegerField(db_column='nb_idade')),
                ('rg', models.CharField(db_column='tx_rg', max_length=12)),
                ('cpf', models.CharField(db_column='tx_cpf', max_length=12)),
            ],
            options={
                'abstract': False,
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(db_column='id', primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True, db_column='dt_created', null=True)),
                ('modified_at', models.DateTimeField(auto_now=True, db_column='dt_modified', null=True)),
                ('active', models.BooleanField(db_column='cs_active', default=True)),
                ('name', models.CharField(db_column='tx_nome', max_length=70)),
                ('registration', models.CharField(db_column='tx_registro', max_length=15)),
            ],
            options={
                'abstract': False,
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(db_column='id', primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True, db_column='dt_created', null=True)),
                ('modified_at', models.DateTimeField(auto_now=True, db_column='dt_modified', null=True)),
                ('active', models.BooleanField(db_column='cs_active', default=True)),
                ('description', models.TextField(db_column='description')),
                ('quantity', models.IntegerField(db_column='quantity', default=0)),
            ],
            options={
                'abstract': False,
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Sale',
            fields=[
                ('id', models.BigAutoField(db_column='id', primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True, db_column='dt_created', null=True)),
                ('modified_at', models.DateTimeField(auto_now=True, db_column='dt_modified', null=True)),
                ('active', models.BooleanField(db_column='cs_active', default=True)),
                ('nrf', models.CharField(db_column='tx_nrf', max_length=255)),
                ('client', models.ForeignKey(db_column='id_client', on_delete=django.db.models.deletion.DO_NOTHING, to='escola.client')),
                ('employee', models.ForeignKey(db_column='id_employee', on_delete=django.db.models.deletion.DO_NOTHING, to='escola.employee')),
                ('product', models.ForeignKey(db_column='id_product', on_delete=django.db.models.deletion.DO_NOTHING, to='escola.product')),
            ],
            options={
                'abstract': False,
                'managed': True,
            },
        ),
    ]
