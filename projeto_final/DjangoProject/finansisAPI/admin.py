from django.contrib import admin
from .models import Category, Entry

# Register your models here.
class EntryAdmin(admin.ModelAdmin):
    fields = ('type', 'description', 'value', 'date', 'category')

    list_display = ('type', 'description', 'value', 'date', 'category')

    list_filter = ('type', 'date', 'category')


admin.site.register(Category)
admin.site.register(Entry, EntryAdmin)