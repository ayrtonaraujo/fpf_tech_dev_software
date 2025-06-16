from rest_framework import serializers
from .models import Category
from .models import Entry


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class EntrySerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)

    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), source='category', write_only=True
    )

    class Meta:
        model = Entry
        fields  = ['id', 'type', 'description', 'value', 'date', 'category', 'category_id']
        # depth = 1