from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Sum
from datetime import datetime
from finansisAPI.models import Entry, Category
from finansisAPI.serializers import CategorySerializer, EntrySerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class EntryViewSet(viewsets.ModelViewSet):
    queryset = Entry.objects.all()
    serializer_class = EntrySerializer


class ResumoMensalView(APIView):

    def get(self, request, *args, **kwargs):

        today = datetime.today().date()

        receitas_mes = Entry.objects.filter(
            type='I',
            date__year=today.year,
            date__month=today.month
        ).aggregate(total=Sum('value'))['total'] or 0


        despesas_mes = Entry.objects.filter(
            type='E',
            date__year=today.year,
            date__month=today.month
        ).aggregate(total=Sum('value'))['total'] or 0


        data = {
            'labels': ['Mês Atual'],
            'receitas': [float(receitas_mes)],  # Chart.js/CSS esperam números
            'despesas': [float(despesas_mes)]
        }


        return Response(data)