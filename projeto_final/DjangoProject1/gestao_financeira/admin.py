from django.contrib import admin
from .models import Categoria, Transacao, TransacaoCategoria

admin.site.register(Categoria)
admin.site.register(Transacao)
admin.site.register(TransacaoCategoria)
