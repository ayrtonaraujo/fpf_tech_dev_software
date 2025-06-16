from django.shortcuts import render
from rest_framework import viewsets

from finansisAPI.models import Entry, Category
from finansisAPI.serializers import CategorySerializer, EntrySerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class EntryViewSet(viewsets.ModelViewSet):
    queryset = Entry.objects.all()
    serializer_class = EntrySerializer